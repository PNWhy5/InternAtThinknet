import blogService from '../services/blogService'

const getProductList = async ()  => {
  try {
    const response = await blogService.getProductList()
    return response
  } catch (error) {
    console.log(error)
  }
}

const createProduct = async (blogData) => {
  try {
    const response = await blogService.createProduct({ ...blogData })
    return response
  } catch (error) {
    console.log(error)
  }
}

const buyProduct = async (id, blogData) => {
  try {
    const response = await blogService.buyProduct(id, { ...blogData })
    return response
  } catch (error) {
    console.log(error)
  }
}

const updateProduct = async (id, blogData) => {
  try {
    const response = await blogService.updateProduct(id, { ...blogData })
    return response
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct = async (id) => {
  try {
    const response = await blogService.deleteProduct(id)
    return response
  } catch (error) {
    console.log(error)
  }
}

export default {
  getProductList,
  createProduct,
  updateProduct,
  deleteProduct,
  buyProduct,
}