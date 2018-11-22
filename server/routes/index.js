const express = require("express");
const router = express.Router();

const {createAuthor, getAllAuthors} = require("../controllers/author");

router.post('/authors', createAuthor)
router.get('/authors', getAllAuthors)

module.exports = router;