const request = require("../services");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await request.deleteContact(contactId);
  res.json({ status: "success", code: 200, payload: { result } });
};

module.exports = removeContact;
