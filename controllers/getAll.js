const request = require("../services");

const listContacts = async (req, res, next) => {
  const result = await request.getAll();
  res.json({ status: "success", code: 200, payload: { result } });
};

module.exports = listContacts;
