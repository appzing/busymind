// we want to create a file that has the schema for our friends
var mongoose = require('mongoose');
var Comment = require('./comment');
var Topic = require('./topic');
var Post = require('./post');
var Schema = mongoose.Schema;



var userSchema = new mongoose.Schema({
	username: String,
	email:String,
	password:String,
	topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	created_at: {type: Date, default: new Date}	
});

module.exports = mongoose.model('User', userSchema);