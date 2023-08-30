import express, { Express } from 'express'
import { connectDB } from '../dataBase/config'
import userRoutes from '../routes/user'
import spentRoutes from '../routes/spent'
import cors from "cors";

// const PORT = process.env.PORT ?? 9001

export class Server {
  app: Express 
  port: string | number | undefined

  constructor() {
    this.app = express()
    this.port = process.env.PORT ?? 9001
    this.connectToDB()
    this.middlewares()
    this.routes()
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server started on port: ${this.port}`)
    })
  }

  async connectToDB(): Promise<void> {
    await connectDB()
  }

  middlewares(): void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes(): void {
    this.app.use('/user', userRoutes )
    this.app.use('/spent', spentRoutes )
  }
}
