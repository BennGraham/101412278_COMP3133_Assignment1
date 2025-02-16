const { gql } = require("apollo-server-express");

const schema = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type Employee {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    designation: String!
    salary: Float!
    joined_date: Date!
    department: String!
    photo: String!
    createdAt: Date!
    updatedAt: Date!
  }
`;
module.exports = schema;
