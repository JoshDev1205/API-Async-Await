const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  cars: [{
    type: Schema.Types.ObjectId,
    ref: 'car'
  }]
},
{
  usePushEach: true
})

module.exports = mongoose.model('user', userSchema)