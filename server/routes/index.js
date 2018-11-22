const express = require("express");
const router = express.Router();

const {createAuthor} = require("../controllers/author");

router.post('/authors', createAuthor)

module.exports = router;