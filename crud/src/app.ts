import express, { NextFunction } from "express"
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
    this.app.use(
      (req: express.Request, res: express.Response, next: NextFunction) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000") // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Credentials", "true")
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        )
        res.header(
          "Access-Control-Allow-Methods",
          "GET, POST, OPTIONS, PUT, DELETE"
        )
        next()
      }
    )
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
