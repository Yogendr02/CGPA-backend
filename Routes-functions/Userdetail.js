const { userdetailmodel } = require("../Models/Userdetailmodel");

const getuserdetail = async (req, res) => {
  const {reg,...rest} = req.body
  const detail = await userdetailmodel.find(rest);
  res.send(detail);
};

const postuserdetail = async (req, res) => {
  try {
    await userdetailmodel.create(req.body);
    res.send("for");
  } catch {
    res.sendStatus(404);
  }
};

module.exports = { postuserdetail, getuserdetail };
