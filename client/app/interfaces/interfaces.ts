export interface IBranch {
  _id: string
  name: string
  direction: string
  email: string
  department: string
  municipality: string
  phone: number
  category: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

export interface IProductCategory {
  _id: string
  category: string
  description: string
  branch: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  __v: number
}
