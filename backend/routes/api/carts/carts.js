const { Router } = require("express");
const router = Router();
const Carts = require("../../../models/Carts");

router.post("/carts", createCarts);
router.post("/carts/:id/items", addNewProduct);
router.put("/carts/:id", updateCarts);
router.delete("/carts/:cart_id/items/:item_id", deleteProductFromCarts);
router.post("/carts/:id/code", addCouponToCarts);
router.get("/carts/:id", getCarts);

async function createCarts(req, res) {
  if (!!req.cookies.carts) {
    await getCarts(req, res);
  } else {
    const carts = await Carts.create({});
    if (!carts) {
      throw new Error("Product not create");
    }
    return res.cookie("carts", carts._id).status(201).json({ carts });
  }
}

async function addNewProduct(req, res) {
  try {
    const { name, subtotal, discount, count } = req.body.product;
    let cartsId = req.params.id;
    let total = subtotal - (subtotal / 100) * discount;
    const carts = await Carts.findById(cartsId);
    if (!carts) {
      throw new Error("Carts not found");
    }
    const found = await Carts.find({
      products: { $elemMatch: { name: name } },
    });

    if (!found.length) {
      await carts.products.push({ name, count });
    } else {
      await Carts.findOneAndUpdate(
        { "products.name": name },
        { $inc: { "products.$.count": 1 } }
      );
    }

    await carts.update({ subtotal, total });
    await carts.save();

    res.status(200).json({ message: "Product add to cart", id: cartsId });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

async function updateCarts(req, res) {}

async function deleteProductFromCarts(req, res) {
  try {
    const cart_id = req.params.cart_id;
    const item_id = req.params.item_id;

    const carts = await Carts.findById(cart_id);
    await carts.products.remove({ _id: item_id });

    await carts.save();
    res.status(200).json({ message: "Product Delete", id: cart_id });
  } catch (e) {
    throw new Error("Product not delete");
  }
}

async function addCouponToCarts(req, res) {
  try {
    const { coupon } = req.body;
    let cartsId = req.params.id;
    let discount;
    if (!coupon.match(/[a-z]/)) {
      return res.status(400).json({ message: "Coupon not validate" });
    } else {
      discount = coupons.find((el) => el.coupon === coupon).discount;
    }
    const carts = await Carts.findByIdAndUpdate(cartsId, { discount: discount });
    if (!carts) {
      throw new Error("Carts not update");
    }
    return res.status(200).json({ message: "Coupon add", id: cartsId });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

async function getCarts(req, res) {
  const id = req.cookies.carts;
  if (!id) {
    return res.status(400).json({});
  }
  const carts = await Carts.findById(id)
  if (!carts) {
    throw new Error("Carts not found");
  }
  return  res.status(200).json({ carts });
}

const coupons = [
  { coupon: "coupon5", discount: 5 },
  { coupon: "coupon10", discount: 10 },
  { coupon: "coupon20", discount: 20 },
  { coupon: "coupon30", discount: 30 },
  { coupon: "coupon40", discount: 40 },
  { coupon: "coupon50", discount: 50 },
  { coupon: "coupon55", discount: 55 },
];

module.exports = router;
