"use strict";

const mongoose 	= require("mongoose");
const Schema 	= mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		trim: true
	},
	fullName: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true
	},
	status: {
		type: Number,
		default: 1
	}

}, {
	timestamps: true
});

UserSchema.index({
	"fullName": "text"
});

const User = mongoose.model("User", UserSchema);
module.exports = {
	User
}