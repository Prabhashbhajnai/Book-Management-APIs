const books = [
    {
        ISBN: "12345Book",
        title: "Looking for Alaska",
        pubDate: "2021-07-07",
        language: "en",
        numPage: 250,
        author: [1, 2],             //1 and 2 are ids of author
        publication: [1],
        category: ["tech", "programming", "education"]
    }
];

const authors = [
    {
        id: 1,
        name: "Prabhash Bhajani",
        books: ["12345Book"]
    },
    {
        id: 2,
        name: "Elon Musk",
        books: ["12345Book"]
    },
    {
        id: 3,
        name: "Ayush  Bhajipale",
        books: ["12354"]
    },
];

const publication = [
    {
        id: 1,
        name: "Writex",
        books: ["12345Book"]
    }
];

module.exports = {books, authors, publication};