const express = require("express");

// Database
const database = require("./database");

// Initialization
const booky = express();

// Book APIs

/* 
Route:          /
Description:    Get all books
Access:         Public
Parameter:      None
Methods:        GET
*/

booky.get("/", (req, res) => {
    return res.json({books: database.books});
});

/* 
Route:          /
Description:    Get specific books using ISBN
Access:         Public
Parameter:      ISBN
Methods:        GET
*/

booky.get("/is/:isbn", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if (getSpecificBook.length === 0) {
        return res.json({error: `No Books found for the given ISBN of ${req.params.isbn}`})
    }

    return res.json({book: getSpecificBook});
});

/* 
Route:          /c
Description:    Get specific books based on category
Access:         Public
Parameter:      category
Methods:        GET
*/

booky.get("/c/:category", (req, res) => {
    const getSpecificBook = database.books.filter((book) => 
        book.category.includes(req.params.category)
    );

    if (getSpecificBook.length === 0) {
        return res.json({error: `No book found for ${req.params.category}`});
    }

    return res.json({book: getSpecificBook});
});

/* 
Route:          /
Description:    Get specific books based on language
Access:         Public
Parameter:      language
Methods:        GET
*/

// Author APIs

/* 
Route:          /author
Description:    Get all author
Access:         Public
Parameter:      None
Methods:        GET
*/

booky.get("/author", (req, res) => {
    return res.json({authors: database.authors});
});

/* 
Route:          /author/id
Description:    Get specific author
Access:         Public
Parameter:      id
Methods:        GET
*/

booky.get("/author/id/:id", (req, res) => {
    const getSpecificAuthor = database.authors.filter((author) => 
        author.id === parseInt(req.params.id)
    );

    if (getSpecificAuthor.length === 0) {
        return res.json({error: `No Author found for ${req.params.id}`});
    }

    return res.json({book: getSpecificAuthor});
});

/* 
Route:          /author/book
Description:    Get all author based on books
Access:         Public
Parameter:      isbn
Methods:        GET
*/

booky.get("/author/book/:isbn", (req, res) => {
    const getSpecificAuthor = database.authors.filter((author) => 
        author.books.includes(req.params.isbn)
    );

    if (getSpecificAuthor.length === 0) {
        return res.json({error: `No Author found for ${req.params.isbn}`});
    }

    return res.json({book: getSpecificAuthor});
});

// Publication APIs

/* 
Route:          /publication
Description:    Get all publications
Access:         Public
Parameter:      None
Methods:        GET
*/

booky.get("/publication", (req, res) => {
    return res.json({publication: database.publication});
});

/* 
Route:          /publication/id
Description:    Get specific publications
Access:         Public
Parameter:      id
Methods:        GET
*/

booky.get("/publication/id/:id", (req, res) => {
    const getSpecificPublication = database.publication.filter((publication) => 
        publication.id === parseInt(req.params.id)
    );

    if (getSpecificPublication.length === 0) {
        return res.json({error: `No Publication found for ${req.params.id}`});
    }

    return res.json({Publication: getSpecificPublication});
});

/* 
Route:          /book/publication
Description:    Get specific publications
Access:         Public
Parameter:      id
Methods:        GET
*/

booky.get("/book/publication/:isbn", (req, res) => {
    const getSpecificPublication = database.publication.filter((publication) => 
        publication.books.includes(req.params.isbn)
    );

    if (getSpecificPublication.length === 0) {
        return res.json({error: `No Publications found for ${req.params.isbn}`});
    }

    return res.json({Publication: getSpecificPublication});
});

booky.listen(3000, () => console.log("Server is Running"));