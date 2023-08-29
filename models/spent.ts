import { ObjectId, Schema, model } from 'mongoose'

interface ISpent {
  user: ObjectId
  category: string
  price: number
  product: string
  description: string
  state: boolean
}

const SpentSchema = new Schema<ISpent>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  product: {
    type: String,
  },
  description: {
    type: String,
  },
  state: {
    type: Boolean,
  },
})

const Spent = model<ISpent>('Spent', SpentSchema)

export { ISpent, Spent }
