import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: { type: String, match: /[A-F][1-9]\d?/ },
  price: {
    type: Number,
    min: 0,
  },
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      let today = new Date()
      let oneYearFromNow = today.getFullYear() + 1
      today.setFullYear(oneYearFromNow)
      return today
    }
  },
  tickets: [ticketSchema]
}, {
  timestamps: true
}
)

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
