import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type: String,
    enum: ['American' , 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS' , 'DFW' , 'DEN' , 'LAX' , 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {type: Date,
    default: function(){
      let date = new Date()
      return date.setFullYear(date.getFullYear()+1)
    }
  }
  // releaseYear: {type: Number, 
  //   default: function(){
  //     return new Date().getFullYear()
  //   },

},{
  timestamps: true
}
)

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
