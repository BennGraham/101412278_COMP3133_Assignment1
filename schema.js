const { gql } = require("apollo-server-express");

const schema = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    email: String
    createdAt: String!
    updatedAt: String!
  }

  type Employee {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    designation: String!
    salary: Float!
    joined_date: String!
    department: String!
    photo: String!
    createdAt: String!
    updatedAt: String!
  }

  input EmployeeCreateRequest {
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    designation: String!
    salary: Float!
    joined_date: String!
    department: String!
    photo: String!
  }

  input EmployeeUpdateRequest {
    first_name: String
    last_name: String
    email: String
    gender: String
    designation: String
    salary: Float
    joined_date: String
    department: String
    photo: String
  }

  type Query {
    login(username: String!, password: String!): User
    employees: [Employee]
    employee(id: ID!): Employee
    employeesByDesignation(designation: String!): [Employee]
    employeesByDepartment(department: String!): [Employee]
    filterEmployees(designation: String, department: String): [Employee]
  }

  type Mutation {
    signup(username: String!, password: String!, email: String!): User
    addEmployee(employee: EmployeeCreateRequest!): Employee
    updateEmployee(employeeId: ID!, updates: EmployeeUpdateRequest!): Employee
    deleteEmployee(id: ID!): Employee
  }
`;
module.exports = schema;
