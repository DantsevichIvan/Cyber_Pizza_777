const { Router } = require("express");
const router = Router();
const Order = require("../../../models/Order");

router.post("/order", createOrder);
router.get("/order/:id", getOrder);

async function createOrder(req, res) {
  try {
    const { products, price } = req.body.order;

    if (!!req.cookies.order) {
      await getOrder(req, res);
    } else {
      const order = await Order.create({ products, price });
      if (!order) {
        throw new Error("Order not create");
      }
      return res.cookie("order", order._id).status(201).json({ order });
    }
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

async function getOrder(req, res) {
  const id = req.cookies.order;
  if (!id) {
    return res.status(400).json({});
  }
  const order = await Order.findById(id);
  if (!order) {
    throw new Error("Order not found");
  }
  return res.status(200).json({ order });
}

module.exports = router;
