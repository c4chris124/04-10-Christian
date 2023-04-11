import mongoose from "mongoose"
import App from "./app"
const app = new App()

app.start()

const MONGO_URL =
  "mongodb+srv://c4chris124:OoBIJ5bh0jAItmS1@cluster0.r3fb042.mongodb.net/?retryWrites=true&w=majority"

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error) => console.log(error))
