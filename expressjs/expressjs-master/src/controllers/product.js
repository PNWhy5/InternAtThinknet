import productData from '../resources/product.json'
import productModel from '../models/product'
import {
  NOT_FOUND_DATA, ERROR_CREATION,
} from '../constants/errors/unsuccess'
import {
  SUCCESS_CREATED,
} from '../constants/success'

const createProduct = async (req, res) => {
  const { name, amount, price } = req.body
  try {
    await productModel.create({ name, amount: +amount, price: +price })
    res.status(201).json(0)
  } catch (error) {
    throw ERROR_CREATION
  }
}

const deleteProductByID = (req, res) => {
  const { ID } = req.params
  const result = productData.filter((item) => item.id !== ID)
  res.status(200).json(result)
}

const getAllProduct = async (req, res) => {
  const result = await productModel.find()
  res.status(200).json(result)
}

const getProductByID = async (req, res) => {
  const { ID } = req.params
  const result = await productModel.findOne({ _id: ID })
  if (!result) {
    throw NOT_FOUND_DATA
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
