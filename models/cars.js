var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
  make: {type: String},
  model: {type: String},
  year: {type: Number},
  locked: {type: Boolean},
  windows: {type: Boolean},
  running: {type: Boolean}
},{
  timestamps: true
});

module.exports = mongoose.model('Car', carSchema);