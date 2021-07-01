const mongoose = require("mongoose");

// Creating book Schema
const BookSchema = mongoose.Schema({
    ISBN: String,
    title: String,
    pubDate: String,
    language: String,
    numPage: Number,
    author: [Number],             //1 and 2 are ids of author
    publication: Number,
    category: [String]
});

// Creating Book Model
const BookModel = mongoose.model("books", BookSchema);          //.model("document name", )

module.exports = BookModel;