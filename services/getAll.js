const { Contact } = require("../models");

const getAll = async () => {
  const result = await Contact.find({});
  return result;
};

module.exports = getAll;
