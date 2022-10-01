const request = require("../services");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await request.getById(contactId);
  res.json({ status: "success", code: 200, payload: { result } });
};

module.exports = getContactById;
