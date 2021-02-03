const { Router } = require("express");
const router = Router();
const Carts = require("../../../models/Carts");

router.post("/carts", async (req, res) => {
  await createCarts(req, res);
});
router.post("/carts/:id/items", async (req, res) => {
  await addNewProduct(req, res);
});

router.put("/carts/:id", async (req, res) => {
  await updateCarts(req, res);
});

router.delete("/carts/:cart_id/items/:item_id", async (req, res) => {
  await deleteProductFromCarts(req, res);
});

router.post("/carts/:id/code", async (req, res) => {
  await addCouponToCarts(req, res);
});

router.get("/carts/:id", async (req, res) => {
  await getCarts(req, res);
});

async function createCarts(req, res) {
  if (!!req.cookies.carts) {
    await getCarts(req, res);
  } else {
    await Carts.create({}, function (err, carts) {
      if (err) console.log(err);
      res.cookie("carts", carts._id).status(201).json({ carts });
    });
  }
}

async function addNewProduct(req, res) {
  try {
    const { name, subtotal, discount } = req.body.product;
    let cartsId = req.params.id;
    let total = subtotal - (subtotal / 100) * discount;

    const carts = await Carts.findById(cartsId);
    carts.find({ products: { name } }, function (err, docs) {
      console.log(err);
      console.log(docs);
    });
    await carts.products.push({ name, subtotal, total });

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
    Carts.findByIdAndUpdate(
      cartsId,
      { discount: discount },
      {},
      async function (err) {
        if (err) return console.log(err);
        res.status(200).json({ message: "Coupon add", id: cartsId });
      }
    );
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
  Carts.findById(id, async function (err, carts) {
    if (err) return console.log("err", err);

    await res.status(200).json({ carts });
  });
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
