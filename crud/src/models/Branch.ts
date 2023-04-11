import mongoose from "mongoose"

interface IBranch extends Document {
  name: string
  direction: string
  email: string
  department: string
  municipality: string
  phone: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const BranchSchema = new mongoose.Schema<IBranch>(
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
      required: true,
      unique: true
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
    isActive: {
      type: Boolean,
      default: true
    }
  },
  // objeto trae por defecto createdAt y updatedAt propiedades
  { timestamps: true }
)

export const BranchesModel = mongoose.model<IBranch>("Branch", BranchSchema)
