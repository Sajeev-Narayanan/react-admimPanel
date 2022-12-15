const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routers/userRouter");
const adminRoutes = require("./routers/adminRouter");
const connectDb = require("./config/config");
app.use(express.json());
app.use(cors());
let status;
// app.post("/signin", (req, res, next) => {
//   console.log(req.body);
//   res.json({ status: true });
// });
connectDb();
app.use("/", userRoutes);
app.use("/admin", adminRoutes);
app.listen(5000, () => {
  console.log("listening to port 5000 .💕❤️💕");
});
