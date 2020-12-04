const {Router} = require('express');
const router = Router();
const Categories = require('../../../models/Categories')

router.get('/categories', async (req, res) => {
    await getCategories(req, res)
});


async function getCategories(req,res){
    Categories.find({}, async function (err, categories) {
        if (err) return console.log(err)
        await res.status(200).json({categories})
    })
}


module.exports = router
