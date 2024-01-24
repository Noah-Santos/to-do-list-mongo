const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		id: {
			type: Number,
		},
		description: {
			type: Number,
		},
		category: {
			type: String,
		},
		completed: {
			type: Boolean,
		},
		priority: {
			type: Number,
		},
		due: {
			type: String,
			default: Date.now(),
		},
		keywords: {
			type: Array,
			default: [],
		}
	},
	{ collection: "posts" }
);

module.exports = mongoose.model("Post", postSchema);