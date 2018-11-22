const express = require("express");
const router = express.Router();

const {createAuthor, getAllAuthors, getOneAuthor} = require("../controllers/author");

router.post('/authors', createAuthor)
router.get('/authors', getAllAuthors)
router.get('/authors/:id', getOneAuthor)

module.exports = router;