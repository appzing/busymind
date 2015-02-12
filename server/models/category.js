var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new mongoose.Schema({
	category: String,
	created_at: {type: Date, default: new Date}

});
module.exports = mongoose.model('Category', categorySchema);