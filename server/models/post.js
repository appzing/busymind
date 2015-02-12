var mongoose = require('mongoose');
var User = require('./user');
var Topic = require('./topic');
var Comment = require('./comment');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
	post: String,
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	_user: {type: Schema.ObjectId, ref: 'User'},
	_topic: {type: Schema.ObjectId, ref: 'Topic'},
	created_at: {type: Date, default: new Date}	

});

module.exports = mongoose.model('Post', postSchema);