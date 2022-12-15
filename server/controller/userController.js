const User = require("../models/userSchema");
const JWT = require("jsonwebtoken");
const mongoose = require("mongoose");
const signup = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.json({ status: true });
  } catch (error) {
   res.json({status: false});
  }
};

exports.signup = signup;

const signin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email: email, password: password });
  if (user) {
    console.log(user);
    const token = await JWT.sign(
      {
        email,
      },
      "anjdjajjajjehd3fj333",
      {
        expiresIn: 360000,
      }
    );
    res.json({
      token,
      email,
      check:true
    });
    
  } else {
    res.json({check:false});
  }
};

exports.signin = signin;

const signinGet = async (req, res) => {
  const user = req.headers["x-custom-header"];
  // console.log(user);
  const decode = JWT.verify(user, "anjdjajjajjehd3fj333");
  email = decode.email;
  const userResult = await User.findOne({ email: email });
  res.json({ userResult });
};
exports.signinGet = signinGet;

const uploadImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { url } = req.body;

    const profile = await User.findByIdAndUpdate(id, { image: url });
    await profile.save();
    res.json({ profile });
  } catch (err) {
    console.log(err);
  }
};
exports.uploadImage = uploadImage;
