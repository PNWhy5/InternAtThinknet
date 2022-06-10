import express from 'express'
import productController from './controllers/product'
import validator from './request'

const router = express.Router()

router
  .get('/products', productController.getAllProduct)
  .get('/products/:ID', productController.getProductByID)
  .post('/products', productController.createProduct)
  .put('/products/:ID', validator.updateByID, productController.updateProductByID)
  .delete('/products/:ID', productController.deleteProductByID)

export default router
