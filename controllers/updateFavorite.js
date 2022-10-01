const request = require("../services");

const updateFavorite = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await request.update(contactId, req.body, { new: true });
  res.json({ status: "success", code: 200, payload: { result } });
};

module.exports = updateFavorite;
