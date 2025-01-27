const express = require('express')
const router = express.Router()
const productsController = require('../app/controllers/ProductsController')

router.post('/:id/edit', productsController.update )
router.get('/:id/edit', productsController.edit )
router.get('/:id/delete', productsController.delete )
router.get('/listproducts', productsController.list )
router.get('/create', productsController.create )
router.post('/store', productsController.store )
router.get('/:slug', productsController.show )
router.get('/', productsController.index )

module.exports = router;