import { Router, Request, Response } from "express"
import { IBranch } from "interfaces/IBrach"

const router = Router()
// Model
import { ProductCategoryModel } from "../models/ProductCategory"
import { IProductCategory } from "interfaces/IProductCategory"

// Gets all product categories
router.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await ProductCategoryModel.find({
      isActive: true
    }).exec()
    res.send(categories)
  } catch (error) {
    console.error(error)
    throw new Error("Error obteniendo todas las categorias productos")
  }
})

router.get("/inactive", async (req: Request, res: Response) => {
  try {
    const categories = await ProductCategoryModel.find({
      isActive: false
    }).exec()
    res.send(categories)
  } catch (error) {
    console.error(error)
    throw new Error("Error obteniendo todas las categorias productos")
  }
})

// Gets category by id
router.get("/:id", async (req: Request, res: Response) => {
  const { categoryId } = req.params
  try {
    const category = await ProductCategoryModel.findById(categoryId).exec()
    res.send(category)
  } catch (error) {
    console.error(error)
    throw new Error("Error obteniendo categoria producto")
  }
})

router.get("/deactivate/:id", async (req: Request, res: Response) => {
  const { categoryId } = req.params
  try {
    const category = await ProductCategoryModel.findByIdAndUpdate(categoryId, {
      isActive: false
    }).exec()
    await category!.save()
    res.send(category)
  } catch (error) {
    console.error(error)
    throw new Error("Error obteniendo categoria producto")
  }
})
router.get("/activate/:id", async (req: Request, res: Response) => {
  const { categoryId } = req.params
  try {
    const category = await ProductCategoryModel.findByIdAndUpdate(categoryId, {
      isActive: true
    }).exec()
    await category!.save()
    res.send(category)
  } catch (error) {
    console.error(error)
    throw new Error("Error obteniendo categoria producto")
  }
})
// creates new category
router.post("/", async (req: Request, res: Response) => {
  try {
    const { category, description, isActive } = req.body as IProductCategory
    const newCategory = new ProductCategoryModel({
      category,
      description,
      isActive
    })
    await newCategory.save()
  } catch (error) {
    console.error(error)
  }
})

router.get("/edit/:id", async (req: Request, res: Response) => {
  const { categoryId } = req.params
  const { category, description, isActive } = req.body as IProductCategory
  const editedCategory = await ProductCategoryModel.findByIdAndUpdate(
    categoryId,
    {
      category,
      description,
      isActive
    }
  ).exec()
  await editedCategory!.save()
  res.send(editedCategory)
})

export default router
