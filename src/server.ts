import "dotenv/config"
import cors from "cors"
import express, { json } from "express"

import { SetupMongo } from "./database"
import { errorHandler } from "./middlewares/error.handler.middleware"
import { routes } from "./routes"

SetupMongo().then(() => {
  const app = express()

  app.use(
    cors({
      origin: process.env.FRONT_URL,
    }),
  )

  app.use(json())

  app.use(routes)

  app.use(errorHandler)

  app.listen(3333, () => console.log("🚀 App is runnig!"))
})
