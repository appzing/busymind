var mongoose = require('mongoose');
var User = require('./user');
var Post = require('./post');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
	comment: String,
	commenter: String,
	_user: {type: Schema.ObjectId, ref: 'User'},
	_post: {type: Schema.ObjectId, ref: 'Post'},
	created_at: {type: Date, default: new Date}	

});

module.exports = mongoose.model('Comment', commentSchema);