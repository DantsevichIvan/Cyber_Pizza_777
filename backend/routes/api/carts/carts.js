const { Router } = require("express");
const router = Router();
const Carts = require("../../../models/Carts");
const mongoose = require("mongoose");

router.post("/carts", createCarts);
router.post("/carts/:id/items", addNewProduct);
router.put("/carts/:cart_id/items/:item_id", updateCarts);
router.delete("/carts/:cart_id/items/:item_id", deleteProductFromCarts);
router.delete("/carts/:cart_id", deleteCarts);
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
    const { name, count, price, image } = req.body.product;
    let cartsId = req.params.id;

    const carts = await Carts.findById(cartsId);
    if (!carts) {
      throw new Error("Carts not found");
    }

    //Price
    let subtotal = carts.subtotal + price;
    const discount = carts.discount;
    let total = subtotal - (subtotal / 100) * discount;

    //Found product
    let found;
    for (let value of carts.products) {
      if (value.name === name) {
        found = true;
      } else {
        found = false;
      }
    }

    if (!found) {
      await carts.products.push({ name, count, price, image });
    } else {
      await Carts.findOneAndUpdate(
        { "products.name": name },
        { $inc: { "products.$.count": 1 } }
      );
    }
    await carts.update({ subtotal, total });
    await carts.save();
    return res
      .status(200)
      .json({ message: "Product add to cart", id: cartsId });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

async function updateCarts(req, res) {
  try {
    const cart_id = req.params.cart_id;
    const item_id = req.params.item_id;
    const { price } = req.body;

    const carts = await Carts.findById(cart_id);
    if (!carts) {
      throw new Error("Carts not found");
    }

    let subtotal = carts.subtotal - price;
    const discount = carts.discount;

    let total = subtotal - (subtotal / 100) * discount;

    await Carts.findOneAndUpdate(
      { "products._id": item_id },
      { $inc: { "products.$.count": -1 } }
    );

    await carts.update({ subtotal, total });
    await carts.save();

    res.status(200).json({ message: "Product update", id: cart_id });
  } catch (err) {
    res.status(500).json({
      message: `Что-то пошло не так,${err}`,
    });
  }
}

async function deleteProductFromCarts(req, res) {
  try {
    const cart_id = req.params.cart_id;
    const item_id = req.params.item_id;
    let price = 0;
    const carts = await Carts.findById(cart_id);

    for (let value of carts.products) {
      let id = mongoose.Types.ObjectId(value._id).toString();
      if (id === item_id) {
        price = value.price;
      }
    }

    let subtotal = carts.subtotal - price;
    const discount = carts.discount;
    let total = subtotal - (subtotal / 100) * discount;

    await carts.products.remove({ _id: item_id });
    await carts.update({ subtotal, total });

    await carts.save();
    res.status(200).json({ message: "Product Delete", id: cart_id });
  } catch (err) {
    console.log(err);
    throw new Error("Product not delete");
  }
}

async function addCouponToCarts(req, res) {
  try {
    const { coupon, total } = req.body;
    let cartsId = req.params.id;
    let discount, newTotal;
    if (!coupon.match(/[a-z]/)) {
      return res.status(400).json({ message: "Coupon not validate" });
    } else {
      discount = coupons.find((el) => el.coupon === coupon).discount;
      newTotal = total - (total / 100) * discount;
    }

    const carts = await Carts.findByIdAndUpdate(cartsId, {
      discount,
      total: newTotal,
    });

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
  const carts = await Carts.findById(id);
  if (!carts) {
    throw new Error("Carts not found");
  }
  return res.status(200).json({ carts });
}

async function deleteCarts(req, res) {
  try {
    const cart_id = req.params.cart_id;
    const carts = await Carts.findByIdAndDelete(cart_id);
    if (!carts) {
      throw new Error("Carts not delete");
    }
    return res
      .clearCookie("carts")
      .status(200)
      .json({ message: "carts Delete" });
  } catch (err) {
    throw new Error("Product not delete");
  }
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
