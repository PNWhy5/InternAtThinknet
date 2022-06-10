import Students from './schemas/students'

const create = (data, options) => Students.create(data,options)

const deleteOne = (query = {}) => Students.deleteOne(query)

const find = (query = {}, fields = {}, options = {}) => Students.find(query, fields, options).lean()

const findOne = (query, fields = {}, options = {}) => Students.findOne(query, fields, options).lean()

const findOneAndUpdate = (query, data = {}) => Students.findOneAndUpdate(query, data,{ upsert: true }).exec()

export default {
    create,
    deleteOne,
    find,
    findOne,
    findOneAndUpdate,
}