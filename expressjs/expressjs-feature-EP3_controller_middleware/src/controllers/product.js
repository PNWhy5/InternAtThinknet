import productData from '../resources/product.json'

const createProduct = (req, res) => {
  const {
    id, name, amount, price,
  } = req.body
  res.status(201).json([...productData,
    {
      id, name, amount, price: +price,
    },
  ])
}

const deleteProductByID = (req, res) => {
  const { ID } = req.params
  const result = productData.filter((item) => item.id !== ID)
  res.status(200).json(result)
}

const getAllProduct = (req, res) => {
  res.status(200).json(productData)
}

const getProductByID = (req, res) => {
  const { ID } = req.params
  const result = productData.find((item) => item.id === ID)
  if (!result) {
    res.status(400).json({ message: 'not found data' })
  }
  res.status(200).json(result)
}

const updateProductByID = (req, res) => {
  const { ID } = req.params
  const { name, amount, price } = req.body
  const result = productData.map((item) => {
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
}

export default {
  createProduct,
  deleteProductByID,
  getAllProduct,
  getProductByID,
  updateProductByID,
}
