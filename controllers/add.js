const request = require("../services");

const addContact = async (req, res, next) => {
  const result = await request.add(req.body);
  res.json({ status: "success", code: 201, payload: { result } });
};

module.exports = addContact;
