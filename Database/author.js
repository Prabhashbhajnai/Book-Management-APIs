const mongoose = require("mongoose");

// Creating author Schema
const AuthorSchema = mongoose.Schema({
    id: Number,
    name: String,
    books: [String]
});

// Creating Book Model
const AuthorModel = mongoose.model("author", AuthorSchema);

module.exports = AuthorModel;