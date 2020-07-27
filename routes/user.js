const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const express = require("express");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
	const user = await User.findById(req.user._id).select("-password");
	res.send(user);
});

router.post("/", async (req, res) => {
	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send("User already registered.");

	user = new User({
		email: req.body.email,
		password: req.body.password,
	});

	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	await user.save();

	const token = user.generateAuthToken();
	res.header("x-auth-token", token).send({ user: user.email, _id: user._id });
});

module.exports = router;