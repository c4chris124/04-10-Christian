import { Router, Request, Response } from "express"
import { IBranch } from "interfaces/IBrach"

const router = Router()
// Model
import { BranchesModel } from "../models/Branch"

router.get("/", async (req: Request, res: Response) => {
  try {
    const branches = await BranchesModel.find({
      isActive: true
    }).exec()
    res.send(branches)
  } catch (error) {
    console.error(error)
  }
})
router.get("/inactive", async (req: Request, res: Response) => {
  try {
    const branches = await BranchesModel.find({
      isActive: false
    }).exec()
    res.send(branches)
  } catch (error) {
    console.error(error)
  }
})

router.get("/:id", async (req: Request, res: Response) => {
  const { branchId } = req.params
  try {
    const branch = await BranchesModel.findById(branchId).exec()
    res.send(branch)
  } catch (error) {
    console.error(error)
    throw new Error("Error obteniendo categoria producto")
  }
})
router.get("/deactivate/:id", async (req: Request, res: Response) => {
  const { branchId } = req.params
  try {
    const branch = await BranchesModel.findByIdAndUpdate(branchId, {
      isActive: false
    }).exec()
    await branch!.save()
    res.send(branch)
  } catch (error) {
    console.error(error)
    throw new Error("Error obteniendo categoria producto")
  }
})
router.get("/activate/:id", async (req: Request, res: Response) => {
  const { branchId } = req.params
  try {
    const branch = await BranchesModel.findByIdAndUpdate(branchId, {
      isActive: true
    }).exec()
    await branch!.save()
    res.send(branch)
  } catch (error) {
    console.error(error)
    throw new Error("Error obteniendo categoria producto")
  }
})

router.post("/", async (req: Request, res: Response) => {
  try {
    const {
      name,
      direction,
      email,
      department,
      municipality,
      phone,
      isActive
    } = req.body as IBranch
    const newBranch = new BranchesModel({
      name,
      direction,
      email,
      department,
      municipality,
      phone,
      isActive
    })
    await newBranch.save()
  } catch (error) {
    console.error(error)
  }
})

router.get("/edit/:id", async (req: Request, res: Response) => {
  const { branchId } = req.params
  const { name, direction, email, department, municipality, phone, isActive } =
    req.body as IBranch
  const branch = await BranchesModel.findByIdAndUpdate(branchId, {
    name,
    direction,
    email,
    department,
    municipality,
    phone,
    isActive
  }).exec()
  await branch!.save()
  res.send(branch)
})

export default router
