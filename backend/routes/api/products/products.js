const { Router } = require("express");
const router = Router();
const Products = require("../../../models/Products");
const auth = require("./../../../middleware/auth.middleware");

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", auth, creatProduct);
router.put("/products/:id", auth, updateProduct);
router.delete("/products/:id", auth, deleteProduct);

async function getProducts(req, res) {
  try {
    const products = await Products.find({});
    if (!products) {
      throw new Error("Products not found");
    }
    return res.status(200).json({ products });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

async function getProduct(req, res) {
  try {
    const productId = req.params.id;
    const product = Products.findById(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return res.status(200).json({ product });
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
}

async function creatProduct(req, res) {
  try {
    const {
      name,
      price,
      description,
      weight,
      image,
      categories,
    } = req.body.product;
    const product = await Products.create({
      name,
      price,
      description,
      weight,
      image,
      categories,
    });
    if (!product) {
      throw new Error("Product not create");
    }
    return res.status(200).json({ message: "Products create" });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

async function updateProduct(req, res) {
  try {
    let productId = req.params.id;
    const {
      name,
      price,
      description,
      weight,
      image,
      categories,
    } = req.body.product;

    const product = await Products.findByIdAndUpdate(
      productId,
      {
        name,
        price,
        description,
        weight,
        image,
        categories,
      },
      { new: true, upsert: true }
    );
    if (!product) {
      throw new Error("Product not update");
    }
    return res.status(200).json({ product });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

async function deleteProduct(req, res) {
  try {
    let productId = req.params.id;
    const product = await Products.findByIdAndDelete(productId);
    if (!product) {
      throw new Error("Product not delete");
    }
    return res.status(200).json({ message: "Product remove" });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

module.exports = router;
