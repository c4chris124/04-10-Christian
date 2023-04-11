import mongoose from "mongoose"

interface IProductCategory extends Document {
  category: string
  description: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const ProductCategorySchema = new mongoose.Schema<IProductCategory>(
  {
    category: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  // objeto trae por defecto createdAt y updatedAt propiedades
  { timestamps: true }
)

export const ProductCategoryModel = mongoose.model<IProductCategory>(
  "Category",
  ProductCategorySchema
)
