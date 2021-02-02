const { Router } = require("express");
const router = Router();
const Order = require("../../../models/Order");

router.post("/order", async (req, res) => {
  await createOrder(req, res);
});
router.get("/order/:id", async (req, res) => {
  await getOrder(req, res);
});

async function createOrder(req, res) {
  if (!!req.cookies.order) {
    await getOrder(req, res);
  } else {
    await Order.create({}, function (err, order) {
      if (err) console.log(err);
      res.cookie("order", order._id).status(201).json({ order });
    });
  }
}
async function getOrder(req, res) {
  const id = req.cookies.order;
  if (!id) {
    return res.status(400).json({});
  }
  Order.findById(id, async function (err, order) {
    if (err) return console.log("err", err);

    await res.status(200).json({ order });
  });
}

module.exports = router;
