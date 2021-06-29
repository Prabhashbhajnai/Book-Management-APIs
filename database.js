const books = [
    {
        ISBN: "12345One",
        title: "Looking for Alaska",
        pubDate: "2021-07-07",
        language: "en",
        numPage: 250,
        author: [1, 2],             //1 and 2 are ids of author
        publication: [1, 2],
        category: ["tech", "programming", "education"]
    },
    {
        ISBN: "12345Two",
        title: "All The Bright Places",
        pubDate: "2021-07-07",
        language: "en",
        numPage: 250,
        author: [1, 2],             //1 and 2 are ids of author
        publication: [1],
        category: ["tech", "programming", "education"]
    },
];

const authors = [
    {
        id: 1,
        name: "Prabhash Bhajani",
        books: ["12345One"]
    },
    {
        id: 2,
        name: "Elon Musk",
        books: ["12345One"]
    },
    {
        id: 3,
        name: "Ayush  Bhajipale",
        books: ["12354"]
    },
];

const publications = [
    {
        id: 1,
        name: "Writex",
        books: ["12345One", "12345Two"]
    },
    {
        id: 2,
        name: "Scolastics",
        books: ["12345One"],
    },
];

module.exports = {books, authors, publications};