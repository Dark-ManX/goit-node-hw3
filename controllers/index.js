const listContacts = require("./getAll");
const getContactById = require("./getById");
const addContact = require("./add");
const removeContact = require("./remove");
const updateContact = require("./update");
const updateFavorite = require("./updateFavorite");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
};
