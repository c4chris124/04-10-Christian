import { IBranch } from "./IBrach"

export interface IProductCategory extends Document {
  category: string
  description: string
  branch: IBranch
  isActive: boolean
}
