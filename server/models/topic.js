var mongoose = require('mongoose');
var User = require('./user');
var Topic = require('./topic');
var Post = require('./post');
var Category = require('./category');
var Schema = mongoose.Schema;

var topicSchema = new mongoose.Schema({
	topic: String,
	description: String,
	category:String,
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	_user: {type: Schema.ObjectId, ref: 'User'},
	created_at: {type: Date, default: new Date}

});
module.exports = mongoose.model('Topic', topicSchema);