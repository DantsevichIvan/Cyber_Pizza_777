const { Router } = require("express");
const router = Router();
const Categories = require("../../../models/Categories");
const Products = require("../../../models/Products");
const auth = require("../../../middleware/auth.middleware");

router.get("/categories", async (req, res) => {
  await getCategories(req, res);
});
router.get("/categories/:id", async (req, res) => {
  await getCategory(req, res);
});
router.post("/categories", auth, async (req, res) => {
  await createCategories(req, res);
});
router.put("/categories/:id", auth, async (req, res) => {
  await updateCategories(req, res);
});
router.delete("/categories/:id", auth, async (req, res) => {
  await deleteCategories(req, res);
});

//finish update and geCategory

async function getCategories(req, res) {
  try {
    Categories.find({}, async function (err, categories) {
      if (err) return console.log(err);
      await res.status(200).json({ categories });
    });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
      success: false,
    });
  }
}

async function getCategory(req, res) {
  try {
    const CategoryId = req.params.id;
    await Categories.findById(CategoryId, async function (err, category) {
      if (err) return console.log("err ", err);
      if (!!category) {
        await Products.find()
          .populate({
            path: category.name,
          })
          .exec(function (err, products) {
            if (err) return console.log(err);
            res.status(200).json({ products });
          });
      } else {
        await res.status(200).json({ message: "Products are missing" });
      }
    });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
      success: false,
    });
  }
}

async function createCategories(req, res) {
  try {
    const { name, available } = req.body.categories;
    await Categories.create({ name, available }, async function (err) {
      if (err) return console.log(err);
      await res.status(200).json({ message: "Categories create" });
    });
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
      success: false,
    });
  }
}

async function updateCategories(req, res) {
  try {
    let categoriesId = req.params.id;
    const { name, available } = req.body.categories;

    Categories.findByIdAndUpdate(
      categoriesId,
      { name, available },
      { new: true, upsert: true },
      async function (err, categories) {
        if (err) return console.log(err);
        await res.status(200).json({ categories });
      }
    );
  } catch (e) {
    res.status(500).json({
      message: "Что-то пошло не так, попробуйте снова",
      success: false,
    });
  }
}

async function deleteCategories(req, res) {
  try {
    let categoriesId = req.params.id;
    Categories.findByIdAndDelete({ _id: categoriesId }, async function (err) {
      if (err) return console.log(err);
      await res.status(200).json({ message: "Categories remove" });
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Что-то пошло не так" + e, success: false });
  }
}

module.exports = router;
