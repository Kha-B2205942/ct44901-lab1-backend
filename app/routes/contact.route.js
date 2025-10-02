const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();


router.route("/")
  .get(contacts.findAll)        // Lấy tất cả contacts
  .post(contacts.create)        // Tạo mới contact
  .delete(contacts.deleteAll);  // Xóa tất cả contacts


router.route("/favorite")
  .get(contacts.findAllFavorite); // Lấy tất cả contacts yêu thích


router.route("/:id")
  .get(contacts.findOne)        // Lấy 1 contact theo id
  .put(contacts.update)         // Cập nhật contact theo id
  .delete(contacts.delete);     // Xóa 1 contact theo id

module.exports = router;
