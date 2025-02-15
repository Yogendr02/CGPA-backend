const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
const signupfunc = require("./Routes-functions/Signup");
const loginfunc = require("./Routes-functions/Login");
const protectfunc = require("./Routes-functions/Protect");
const seatfunc = require("./Routes-functions/Seat");
const userseatfunc = require("./Routes-functions/Userseat");
const userdetailfunc = require("./Routes-functions/Userdetail");
const seating = require("./Routes-functions/Seatprotect");

app.use(cors());
const mongoose = require("mongoose");
const db =
  "mongodb+srv://121127:VyaAGJ782IyBsWjL@cluster0.at0aa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const pri = async () => {
  await mongoose.connect(db);

  app.get("/", (req, res) => {
    res.send("good job you reached backend");
  });

  app.post("/signup", signupfunc.signup);
  app.post("/login", loginfunc.login);
  app.get("/getseat", protectfunc.protect, seatfunc.getseat);
  app.patch("/changeseat",protectfunc.protect, seatfunc.changeseat);
  app.get("/getuserseat", protectfunc.protect, userseatfunc.getuserseat);
  app.post("/senduserseat", protectfunc.protect, userseatfunc.postuserseat);
  app.get("/getuserdetail", protectfunc.protect,userdetailfunc.getuserdetail);
  app.post(
    "/senduserdetail",
    protectfunc.protect,
    userdetailfunc.postuserdetail
  );
  app.get("/confirmseat", protectfunc.protect, seating.Seatprotect);

};

pri();

console.log(process.env.PORT);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`app running on ${port}`);
});
