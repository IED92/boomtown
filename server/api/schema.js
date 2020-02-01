const { gql } = require("apollo-server-express");

/*
 *
 * Define the types in your GraphQL schema here.
 * For each type, remove the `_: Boolean` placeholder and add the
 * fields as directed. Be sure to finish writing resolvers for all types
 * and any relational fields, where required.
 *
 * We will create the custom Date scalar together.
 */
module.exports = gql`
  #scalar Date
  input SignUpInput {
    fullname: String!
    email: String!
    password: String!
  }
  input LogInInput {
    email: String!
    password: String!
  }
  type Item {
    id: ID!
    title: String!
    imageurl: String
    description: String!
    ownerid: User!
    tags: [Tag]
    created: String!
    borrower: User
  }
  type User {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    items: [Item]
    borrowed: [Item]
  }
  type Tag {
    id: ID!
    title: String!
  }
  type Authpayload {
    token: String
    user: User
  }
  input AssignedTag {
    id: ID!
    title: String!
  }
  input AssignedBorrower {
    id: ID!
  }
  input NewItemInput {
    title: String!
    description: String
    tags: [AssignedTag]!
  }
  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID!): [Item]
    tags: [Tag]
  }
  type Mutation {
    signup(user: SignUpInput!): Authpayload!
    login(user: LogInInput!): Authpayload!
    logout: Boolean!
    addItem(item: NewItemInput!): Item
  }
`;
