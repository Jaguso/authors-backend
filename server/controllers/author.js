const {Author} = require('../models');


const createAuthor = async(req, res) => {

    let author = await Author.create(req.body)

    if(!author) return res.status(400).json({"message": "Couldn't create author"})

    return res.status(201).json(author)
}


const getAllAuthors = async(req, res) => {

    let allAuthors = await Author.findAll()

    return res.status(200).json(allAuthors);
}


module.exports = {
    createAuthor,
    getAllAuthors
}