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
      debugger;
      res.cookie("carts", carts._id).status(201).json({ carts });
    });
  }
}

async function addNewProduct(req, res) {}
async function updateCarts(req, res) {}
async function deleteProductFromCarts(req, res) {}
async function addCouponToCarts(req, res) {}

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

module.exports = router;
