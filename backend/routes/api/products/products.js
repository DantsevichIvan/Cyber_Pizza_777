const { Router } = require("express");
const router = Router();
const Products = require("../../../models/Products");
const auth = require("./../../../middleware/auth.middleware");

router.get("/products", async (req, res) => {
  await getProducts(req, res);
});
router.get("/products/:id", auth, async (req, res) => {
  await getProduct(req, res);
});
router.post("/products", auth, async (req, res) => {
  await creatProduct(req, res);
});
router.put("/products/:id", auth, async (req, res) => {
  await updateProduct(req, res);
});
router.delete("/products/:id", auth, async (req, res) => {
  await deleteProduct(req, res);
});

async function getProducts(req, res) {
  try {
    Products.find({}, async function (err, products) {
      if (err) return console.log(err);
      await res.status(200).json({ products });
    });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}
async function getProduct(req, res) {
  try {
    const productId = req.params.id;
    Products.find(productId, async function (err, product) {
      if (err) return console.log(err);
      await res.status(200).json({ product });
    });
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
    await Products.create(
      { name, price, description, weight, image, categories },
      function (err) {
        if (err) return console.log(err);
        res.status(200).json({ message: "Products create" });
      }
    );
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

    Products.findByIdAndUpdate(
      productId,
      { name, price, description, weight, image, categories },
      { new: true, upsert: true },
      async function (err, product) {
        if (err) return console.log(err);
        await res.status(200).json({ product });
      }
    );
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}
async function deleteProduct(req, res) {
  try {
    let productId = req.params.id;
    Products.findByIdAndDelete(productId, async function (err) {
      if (err) return console.log(err);
      await res.status(200).json({ message: "Product remove" });
    });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
    });
  }
}

module.exports = router;
