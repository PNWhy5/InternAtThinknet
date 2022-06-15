import { response } from 'express'
import { indexOf } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

const Product = [
  {
    _id: uuidv4(),
    name: "เครื่องฟอกอากาศ",
    Stock: 10,
    MFD: "2022-01-01",
    weight: 2.5,
    TIS: "012345ASDF",
  },
  {
    _id: uuidv4(),
    name: "Harry Potter",
    Stock: 120,
    category: "Entertain",
    Page: 520,
    ISBN: "TestTest123456",
    Publisher: "IDONTKNOW213",
  },
  {
    _id: uuidv4(),
    name: "Milk Gallon",
    Stock: 50,
    MFG:"2022-05-05",
    EXP:"2022-05-15",
    detail: "Just a milk",
    Vendor: "Some Farm",
    Distributor: "Market Maybe",
    FDA: "ThisIsFDANum123456",
  },
]

const getProductList = () => {
  return { data: Product }
}

const createProduct = (blogData) => {
  const response = { _id: uuidv4(), ...blogData }
  Product.push(response)
  return { data: response}
}

const buyProduct = (id, blogData) => {
  const num = blogData.num
  const oldData = Product.find(x => x._id === id)
  const tempData = oldData
  const inStock = oldData.Stock
  if(inStock >= num){
    tempData.Stock = oldData.Stock - num
    Object.assign(oldData, tempData)
    console.log('Success');
    const NewData = Product.find(x => x._id === id)
    return { data: NewData}
  }
  else { 
    console.log('Out of Stock')
    const NewData = Product.find(x => x._id === id)
    return { data: NewData}
  }
}

const updateProduct = (id, blogData) => {
  const oldData = Product.find(x => x._id === id)
  const index = Product.map(x => { return x._id }).indexOf(id)
  Object.assign(oldData, { ...blogData })
  return { 
    httpCode: '201',
    message: `${oldData?.title} has been updated.`
  }
}

const deleteProduct = (id) => {
  const response = Product.find(x => x._id === id)
  const index = Product.map(x => {return x._id}).indexOf(id)
  if (response) Product.splice(index, 1)
  return { 
    httpCode: '201',
    message: `${response?.title} has been deleted.`
  }
}



export default {
  getProductList,
  createProduct,
  updateProduct,
  deleteProduct,
  buyProduct,
}


