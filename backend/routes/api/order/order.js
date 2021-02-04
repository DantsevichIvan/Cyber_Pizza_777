const { Router } = require("express");
const router = Router();
const Order = require("../../../models/Order");

router.post("/order", createOrder);
router.get("/order/:id", getOrder);

async function createOrder(req, res) {
  if (!!req.cookies.order) {
    await getOrder(req, res);
  } else {
    const order = await Order.create({});
    if (!order) {
      throw new Error("Order not create");
    }
    return res.cookie("order", order._id).status(201).json({ order });
  }
}

async function getOrder(req, res) {
  const id = req.cookies.order;
  if (!id) {
    return res.status(400).json({});
  }
  const order = await Order.findById(id)
  if (!order) {
    throw new Error("Order not found");
  }
  return res.status(200).json({ order });
}

module.exports = router;
