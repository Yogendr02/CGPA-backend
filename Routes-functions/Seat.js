const seatmod = require("../Models/Seatmodel");

const getseat = async (req, res) => {
  const {reg,...rest} = req.body
  const seats = await seatmod.seatmodule.find(rest);
  res.send(seats);
};

const changeseat = async (req, res) => {
  await seatmod.seatmodule.updateOne({ reg: 121127 }, {[req.body.branch]:req.body.seat});
  res.send("done");
};

module.exports = { getseat, changeseat };
