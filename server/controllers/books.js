const {Books, Authors} = require('../models');


const createBook = async(req, res) => {
    
    try{
        req.body.authorId = req.params.id
        let book = await Books.create(req.body)
        return res.status(200).json(book)
    
    }catch(e){
        console.log(e)
        return res.status(400).json({e})
    }
   
}


module.exports = {
    createBook
}