

async function getProduct(req, res) {
    try {
        res.status(200).json({message: 'Get Product'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
}
async function creatProduct(req, res) {
    try {
        res.status(200).json({message: 'Get Product'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function updateProduct(req, res) {
    try {
        res.status(200).json({message: 'Get Product'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function deleteProduct(req, res) {
    try {
        res.status(200).json({message: 'Get Product'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}

module.exports = {getProduct,creatProduct,updateProduct,deleteProduct}
