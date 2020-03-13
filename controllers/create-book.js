const Book = require('../models/Book');
const controller = async(req, res) =>{
    const{body} = req;
    const book = await Book.create({
        name: body.name,
        description: body.description,
        yearOfRelease: body.yearOfRelease,
        author: body.author
    })
    res.send(book)
}

module.exports = controller;