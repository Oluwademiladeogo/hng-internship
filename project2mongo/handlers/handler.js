const express = require("express");
const router = express.Router();
const { userschema } = require("../models/userschema");
router.get("/", async (req, res) => {
  const result = await userschema.find().sort("name");
  res.send(result);
});
router.get("/:id", async (req, res) => {
  if (!req.params) return res.status(404).send("add an id after the /api/");
  const userid = req.params;
  console.log(userid);
  const user = await userschema.findById(userid.id);
  res.send(user);
});
router.post("/", async (req, res) => {
  if (!req.body.name) return res.status(404).send("add the name");
  const name = req.body.name;
  const user = new userschema({
    name: name,
    new: true,
  });
  await user.save();
  res.send(user);
});
router.put("/:id", async (req, res) => {
  if (!req.params) return res.status(404).send("Add the id right after /api/");
  const id = req.params;
  const newname = req.body.name;
  const user = await userschema.findByIdAndUpdate(id.id, {
    name: newname,
    new: true,
  });
  res.send('{\n"_id": "' + id.id + '",\n "name": ' + newname + '" \n}');
});
router.delete("/:id", async (req, res) => {
  if (!req.params) return res.status(404).send("Add the id right after /api/");
  const id = req.params;
  const user = await userschema.findByIdAndDelete(id.id);
  res.send("Deleted user with id " + id.id);
});
module.exports = router;
