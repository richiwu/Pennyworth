var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recommendSchema = new Schema({
	text: {type: String, default:  ''},
	date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Recommendation', recommendSchema);