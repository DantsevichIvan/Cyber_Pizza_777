const { Router } = require("express");
const router = Router();
const Order = require("../../../models/Order");

router.post("/order", createOrder);
router.get("/order/:id", getOrder);
router.get("/admin/order/:id", getOneForAdmin);
router.get("/order", getAllOrders);
router.put("/order/:id", updateStatusOrder);

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

async function getAllOrders(req, res) {
  try {
    const orders = await Order.find({});
    if (!orders) {
      throw new Error("orders not found");
    }
    return res.status(200).json({ orders });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

async function getOneForAdmin(req, res) {
  try {
    const order_id = req.params.id;
    const order = await Order.findOne({ _id: order_id });
    if (!order) {
      throw new Error("order not found");
    }
    return res.status(200).json({ order });
  } catch (err) {
    res.status(500).json({
      message: `Что-то пошло не так, ${err}`,
    });
  }
}

async function updateStatusOrder(req, res) {
  try {
    const { status } = req.body;
    const { name, phone, street, house, flat } = req.body.orderValues;
    let order_id = req.params.id;

    const order = await Order.findOneAndUpdate(
      { _id: order_id },
      {
        user: {
          name,
          phone,
          address: {
            street,
            house,
            flat,
          },
        },
        status,
      }
    );
    if (!order) {
      throw new Error("Order not update");
    }
    await order.save();
    return res.status(200).json({ message: "Order update", id: order_id });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

module.exports = router;
