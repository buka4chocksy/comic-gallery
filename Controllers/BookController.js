const Book = require('../Models/Books');
const bodyparser = require('body-parser');

exports.getBookById = function(req, res) {
    const id = req.params.id;
    // res.send(id);
    Book.findById(id, function(err, book) {
        if(err) res.status(404).json({err: err, message: 'sorry, could not get book by Id'});
        res.status(200).json(book);
    });
}

exports.getAllBooks = function(req, res) {
    // res.send('Yaya1122!');
    Book.find({}, function(err, data) {
        if(err) res.status(404).json({err: err, message: 'Cannot get all books'});
        res.status(200).json(data);
    })
}