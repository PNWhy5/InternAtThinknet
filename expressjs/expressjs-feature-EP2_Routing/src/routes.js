import express from 'express'
import product from './resources/product.json'

const router = express.Router()

router
  .get('/products', (req, res, next) => res.status(200).json(product))
  .get('/products/:ID', (req, res) => {
    const { ID } = req.params
    const result = product.find((item) => item.id === ID)
    res.status(200).json(result)
  })
  .post('/products', (req, res) => {
    const {
      id, name, amount, price,
    } = req.body
    res.status(201).json([...product,
      {
        id, name, amount, price: +price,
      },
    ])
  })
  .put('/products/:ID', (req, res) => {
    const { ID } = req.params
    const { name, amount, price } = req.body
    const result = product.map((item) => {
      if (item.id === ID) {
        return {
          id: item.id,
          name,
          amount,
          price: +price,
        }
      }
      return item
    })
    res.status(200).json(result)
  })
  .delete('/products/:ID', (req, res) => {
    const { ID } = req.params
    const result = product.filter((item) => item.id !== ID)
    res.status(200).json(result)
  })

export default router
