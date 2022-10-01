const express = require("express");

const contacts = require("../../controllers");

const { isValidId, validateBody } = require("../../middlewares");

const { schemas } = require("../../models");

const { controlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", controlWrapper(contacts.listContacts));

router.get("/:contactId", isValidId, controlWrapper(contacts.getContactById));

router.post(
  "/",
  validateBody(schemas.addSchema),
  controlWrapper(contacts.addContact)
);

router.delete("/:contactId", isValidId, controlWrapper(contacts.removeContact));

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  controlWrapper(contacts.updateContact)
);

router.put("/:contactId/favorite", isValidId);

module.exports = router;
