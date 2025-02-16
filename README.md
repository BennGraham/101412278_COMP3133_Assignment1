# COMP3133 Assignment 1

### Benn Graham

#### 101412278

## GraphQL Implementation

GraphQL APIs which accept data as JSON Objects

- [ ] Mutation: Signup -> Allow user to create a new account
- [ ] Query: Login -> Allow user to access the system
- [ ] Query: Get All Employees -> User can get a list of all employees
- [ ] Mutation: Add New Employee -> User can create a new employee
- [ ] Query: Search employee by ID -> User can get employee details by employee ID
- [ ] Mutation: Update Employee by ID -> User can update employee details
- [ ] Mutation: Delete Employee by ID -> User can delete employee by ID
- [ ] Query: Search employee by designation or departmnet -> User can get employee details by designation or department

## MongoDB Implementation

MongoDB Database name: comp3133\_\_StudentID_assigment1

### Database Schema

### User Collection

| Field Name | Type   | Constraints |
| ---------- | ------ | ----------- |
| \_id       | String | Auto-Inc    |
| username   | String | Primary Key |
| password   | String | Encrypted   |
| email      | String | Unique      |
| createdAt  | Date   |             |
| updatedAt  | Date   |             |

### Employee Collection

| Field Name  | Type   | Constraints |
| ----------- | ------ | ----------- |
| \_id        | String | Auto-Inc    |
| first_name  | String | Required    |
| last_name   | String | Required    |
| email       | String | Unique      |
| gender      | String | M/F/Other   |
| designation | String | Required    |
| salary      | Float  | >= 1000     |
| joined_date | Date   | Required    |
| department  | String | Required    |
| photo       | String | String      |
| createdAt   | Date   | Default now |
| updatedAt   | Date   | Default now |
