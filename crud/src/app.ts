import express from "express"
import morgan from "morgan"
import BranchesRoutes from "./routes/branches"
import ProductCategoryRoutes from "./routes/productCategories"

class Application {
  app: express.Application

  constructor() {
    this.app = express()
    this.settings()
    this.middleware()
    this.routes()
  }

  settings() {
    this.app.set("port", 3001)
  }

  middleware() {
    this.app.use(morgan("dev"))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  routes() {
    this.app.use("/branch", BranchesRoutes)
    this.app.use("/product-category", ProductCategoryRoutes)
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server running on port ${this.app.get("port")}`)
    })
  }
}

export default Application
