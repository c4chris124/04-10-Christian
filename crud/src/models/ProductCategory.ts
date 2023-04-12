import mongoose, { Schema } from "mongoose"
import { IBranch1 } from "./Branch"

export interface IProductCategory1 extends Document {
  category: string
  description: string
  isActive: boolean
  branch: IBranch1
  createdAt: Date
  updatedAt: Date
}

const ProductCategorySchema = new mongoose.Schema<IProductCategory1>(
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
    branch: {
      type: Schema.Types.ObjectId,
      ref: "Branch"
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  // objeto trae por defecto createdAt y updatedAt propiedades
  { timestamps: true }
)

export const ProductCategoryModel = mongoose.model<IProductCategory1>(
  "Category",
  ProductCategorySchema
)
