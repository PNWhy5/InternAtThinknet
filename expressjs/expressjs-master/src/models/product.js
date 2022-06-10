import Product from './schemas/product'

const create = (data, options) => Product.create(data, options)

const deleteOne = (query) => Product.deleteOne(query)

const find = (query, fields = {}, options = {}) => Product.find(query, fields, options).lean()

const findOne = (query, fields = {}, options = {}) => Product.findOne(query, fields, options).lean()

const findOneAndUpdate = (data) => Product.findOneAndUpdate({}, data, { upsert: true }).exec()

export default {
  create,
  deleteOne,
  find,
  findOne,
  findOneAndUpdate,
}
