import express, { Express } from 'express'
import { connectDB } from '../dataBase/config'

const PORT = process.env.PORT ?? 9001

export class Server {
  app: Express

  constructor() {
    this.app = express()
    this.connectToDB()
    this.middlewares()
  }

  async connectToDB(): Promise<void> {
    await connectDB()
  }

  middlewares(): void {
    this.app.use(express.json())
  }

  listen(): void {
    this.app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`)
    })
  }
}
