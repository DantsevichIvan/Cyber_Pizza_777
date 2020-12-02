const {getProducts,getProduct, creatProduct, updateProduct, deleteProduct} = require("../providers/products");
const {Router} = require('express');
const router = Router();

router.get('/products', async (req, res) => {
    await getProducts(req, res)
});
router.get('/products/:id', async (req, res) => {
    await getProduct(req, res)
});
router.post('/products', async (req, res) => {
    await creatProduct(req, res)
})
router.put('/products/:id', async (req, res) => {
    await updateProduct(req, res)
})
router.delete('/products/:id', async (req, res) => {
    await deleteProduct(req, res)
})


module.exports = router
