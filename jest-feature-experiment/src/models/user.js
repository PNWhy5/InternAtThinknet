import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

const UserSchema = new mongoose.Schema({
  username: { type: String },
  firstname: { type: String },
  lastname: { type: String },
}, {
  versionKey: false,
  timestamps: true,
})

UserSchema.index({ username: 1 }, { unique: true })
const user = mongoose.model('User', UserSchema)

const find = (query) => user.findOne(query).lean()

const create = (data) => user.create(data)

const findOneAndUpdate = (query, changes) => user.findOneAndUpdate(query, changes, { new: true }).lean()

const remove = (query) => user.deleteMany(query).lean()

export default {
  find,
  create,
  findOneAndUpdate,
  remove,
  model: user,
}
