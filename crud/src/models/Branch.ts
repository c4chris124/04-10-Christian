import mongoose, { Schema } from "mongoose"
import { IProductCategory1 } from "./ProductCategory"

export interface IBranch1 {
  name: string
  direction: string
  email: string
  department: string
  municipality: string
  phone: number
  category: IProductCategory1
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const BranchSchema = new mongoose.Schema<IBranch1>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    direction: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    municipality: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  // objeto trae por defecto createdAt y updatedAt propiedades
  { timestamps: true }
)

export const BranchesModel = mongoose.model<IBranch1>("Branch", BranchSchema)
