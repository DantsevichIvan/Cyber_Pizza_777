const { Router } = require("express");
const router = Router();
const Categories = require("../../../models/Categories");
const auth = require("../../../middleware/auth.middleware");

router.get("/categories", getCategories);
router.get("/categories/:id", getCategory);
router.post("/categories", auth, createCategories);
router.put("/categories/:id", auth, updateCategories);
router.delete("/categories/:id", auth, deleteCategories);

async function getCategories(req, res) {
  try {
    const categories = await Categories.find();
    res.json({ categories });
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

    const category = await Categories.findById(CategoryId).populate("products");
    if (!category) {
      throw new Error("Category not found");
    }
    return res.json({ products: category.products });
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

    const categories = await Categories.create({ name, available });
    if (!categories) {
      throw new Error("Categories not create");
    }
    return res.status(200).json({ message: "Categories create" });
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
    const categories = await Categories.findByIdAndUpdate(
      categoriesId,
      { name, available },
      { new: true, upsert: true }
    );
    if (!categories) {
      throw new Error("Categories not delete");
    }
    return res.status(200).json({ categories });
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
    const categories = await Categories.findByIdAndDelete(categoriesId);
    if (!categories) {
      throw new Error("Categories not delete");
    }

    return res.status(200).json({ message: "Categories remove" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Что-то пошло не так" + e, success: false });
  }
}

module.exports = router;
