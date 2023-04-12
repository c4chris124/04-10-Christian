import { IProductCategory } from "./IProductCategory"

export interface IBranch extends Document {
  name: string
  direction: string
  email: string
  department: string
  municipality: string
  phone: number
  category: IProductCategory
  isActive: boolean
}
