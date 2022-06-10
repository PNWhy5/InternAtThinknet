import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
)

const productModel = mongoose.model('product', productSchema)

export default productModel
export { productSchema }
