var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
  make: {type: String},
  model: {type: String},
  year: {type: Number}
},{
  timestamps: true
});

module.exports = mongoose.model('Car', carSchema);