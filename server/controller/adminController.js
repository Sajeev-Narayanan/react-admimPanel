const User = require("../models/userSchema");
const JWT = require("jsonwebtoken");

const login = async (req, res) => {
  const email = "admin@123";
  const password = "123";
  console.log(" this is in maaaan");
  if (req.body.email === email && req.body.password === password) {
    const token = JWT.sign(
      {
        email: email,
        type: "admin",
      },
      "secret456"
    );
    console.log(token);
    res.json({ status: true, token: token });
  }
  else{
    res.json({ status: false});
  }
};

const getDashboard = async (req, res) => {
  const token = req.headers["x-custom-header"];
  const decode = JWT.verify(token, "secret456");
  email = decode.email;
  type = decode.type;
  try {
    const users = await User.find({});
    res.json({ users });
  } catch (err) {
    console.log(err);
  }
};

const singleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({ user });
  } catch (err) {
    console.log(err);
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({ user });
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await User.findByIdAndUpdate(id, { ...req.body });
    res.json({ update });
  } catch (err) {
    console.log(err);
  }
};

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.json({ status: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login,
  getDashboard,
  singleUser,
  editUser,
  updateUser,
  removeUser,
};
