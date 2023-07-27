const {gpl} = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        books: [Book]
        book(bookId: String!): Book
    }

    type Mutation {
        saveBook(authors: [String], description: String, bookId: String, image: String, link: String, title: String): Book
        removeBook(bookId: String!): Book
    }
`;

module.exports = typeDefs;