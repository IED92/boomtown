const { gql } = require("apollo-server-express");

module.exports = gql`
  input SignupInput {
    fullname: String!
    email: String!
    password: String!
  }
  input LoginInput {
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
    signup(user: SignupInput!): Authpayload!
    login(user: LoginInput!): Authpayload!
    logout: Boolean!
    addItem(item: NewItemInput!): Item
  }
`;
