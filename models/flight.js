import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type: String,
  },
  airport: String,
  flightNo: Number,
  departs: Date,
}, {
  timestamps: true
}
)

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
