const Products = require('../models/Products')


async function getProduct(req, res) {
    try {
        const productId = req.params.id
        Products.find(productId, async function (err, product) {
            if (err) return console.log(err)
            await res.status(200).json({product})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
}
async function creatProduct(req, res) {
    try {
        const {name, price, description, weight, image} = req.body
        await Products.create({name, price, description, weight, image}, function (err) {
            if (err) return console.log(err)
            res.status(200).json({message: 'Products create'})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function updateProduct(req, res) {
    try {
        let productId = req.params.id
        const {name, price} = req.body

        Products.findByIdAndUpdate(productId, {name, price}, async function (err, product){
            if (err) return console.log(err)
            await res.status(200).json({product})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function deleteProduct(req, res) {
    try {
        let productId = req.params.id
        Products.findByIdAndDelete(productId, async function (err) {
            if (err) return console.log(err)
            await res.status(200).json({message: 'Product remove'})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}

module.exports = {getProduct, creatProduct, updateProduct, deleteProduct}
