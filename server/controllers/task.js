const Post = require("../models/Post");
//post put and get one all require success true/false

//Get function for all posts
//get "/"
const readAllPosts = async (req, res) => {
	try {
		let item = await Post.find({});
		res.json({ success: true, data: item });
	} catch (err) {
		console.log(err);
	}
};

//post "/"
//change this to match the format of the posts
//this is for title, content, author, and id (they fill in? should be messy)
const createPost = async (req, res) => {
	try {
		const { title, img, desc, authorName, authorId } = req.body;
		let allPosts = await Post.find({});
		console.log(title + ' ' + img + ' ' + desc + ' ' + authorName + ' ' + authorId);
		// if (!title || !img || !desc || !authorName || authorId != undefined) {
		// 	console.log("not all fields are filled out");
		// 	return res.json({ data: [], success: false, msg: "Please fill out all fields" });
		// } else {
		// 	let itemTwo = await Post.create({title:title, image:img, description:desc, authorName:authorName, authorId:authorId, id: allPosts.length+1});
		// 	res.json({ success: true, data: itemTwo });
		// 	//give it an id
		// }
		let itemTwo = await Post.create({title:title, image:img, description:desc, authorName:authorName, authorId:authorId, id: allPosts.length+1});
		res.json({ success: true, data: itemTwo });
	} catch (err) {
		console.log(err);
	}
};

//get "/:id"
const readOnePost = async (req, res) => {
	try {
		const { id } = req.params;
		let item = await Post.findOne({ id: id });
		if (!item) {
			return res.json({ success: false, data: [] });
		}
		res.json({ success: true, data: item });
	} catch (err) {
		console.log(err);
	}
};

//put "/:oldId"
const updatePost = async (req, res) => {
	try {
		const { oldId } = req.params;
		const {title, img, desc} = req.body;
		let item = await Post.findOneAndUpdate({ id: oldId }, {title:title, image:img, description:desc});
		if (!item) {
			return res.json({ success: false, data: [] });
		}
		res.json({ data: item, success: true });
	} catch (err) {
		console.log(err);
	}
};

//delete "/:id"
const deletePost = async (req, res) => {
	//reassign the assigned ones
	try {
		const { id } = req.params;
		console.log(id);
		let item = await Post.findOneAndDelete({ id: id });
		if (item == null) {
			console.log("no Post exists with that id");
			res.json({ success: false, msg: "no Post exists with that id" });
		} else {
			//this returns what was replaced
			console.log(item);
			res.json({ data: item, success: true });
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = { readAllPosts, createPost, readOnePost, updatePost, deletePost };
