const {Router} = require('express');
const router = Router();
const Categories = require('../../../models/Categories')

router.get('/categories', async (req, res) => {
    await getCategories(req, res)
});
router.get('/categories/:id', async (req, res) => {
    await getCategory(req, res)
});
router.post('/categories', async (req, res) => {
    await createCategories(req, res)
});
router.put('/categories/:id', async (req, res) => {
    await updateCategories(req, res)
});
router.delete('/categories/:id', async (req, res) => {
    await deleteCategories(req, res)
});


async function getCategories(req, res) {
    try {
        Categories.find({}, async function (err, categories) {
            if (err) return console.log(err)
            await res.status(200).json({categories})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function getCategory(req, res) {
    try {

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function createCategories(req, res) {
    try {
        const {name, available} = req.body.categories
        await Categories.create({name, available}, async function (err) {
            if (err) return console.log(err)
            await res.status(200).json({message: 'Categories create'})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function updateCategories(req, res) {
    try {
        let categoriesId = req.params.id
        const {name, available} = req.body

        Categories.findByIdAndUpdate(
            categoriesId,
            {name, available},
            {new:true, upsert:true},
            async function (err, categories){
                if (err) return console.log(err)
                await res.status(200).json({categories})
            })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function deleteCategories(req, res) {
    try {
        let categoriesId = req.params.id
        Categories.findByIdAndDelete({categoriesId}, async function (err) {
            if (err) return console.log(err)
            await res.status(200).json({message: 'Categories remove'})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }

}

module.exports = router
