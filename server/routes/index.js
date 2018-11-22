const express = require("express");
const router = express.Router();

const {createAuthor, getAllAuthors, getOneAuthor} = require("../controllers/author");
const {createBook} = require("../controllers/books");


router.post('/authors', createAuthor)
router.get('/authors', getAllAuthors)
router.get('/authors/:id', getOneAuthor)

router.post('/books', createBook)

module.exports = router;