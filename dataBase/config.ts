import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      'mongodb+srv://TestUser:7JlFCstTg5Eff8nW@appgastos.7u6h31l.mongodb.net/?retryWrites=true&w=majority'
    )
    console.log('Database connected')
  } catch (error) {
    console.log('DB Error', error)
    throw new Error('Error connecting to the database')
  }
}

export { connectDB }
