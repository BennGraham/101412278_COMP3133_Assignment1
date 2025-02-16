# COMP3133 Assignment 1

### Benn Graham

#### 101412278

## GraphQL Implementation

#### How to Begin:

- Add DB credentials to .env
- `npm install`
- `npm start`
- visit: localhost:4000/graphql
- enter query to test endpoints

example:

```
query Login {
  login(
    username: "testuser4"
    password: "password12"
  ) {
    id
    username
  }
}
```

GraphQL APIs which accept data as JSON Objects

- [x] Mutation: Signup -> Allow user to create a new account
- [x] Query: Login -> Allow user to access the system
- [x] Query: Get All Employees -> User can get a list of all employees
- [x] Mutation: Add New Employee -> User can create a new employee
- [x] Query: Search employee by ID -> User can get employee details by employee ID
- [x] Mutation: Update Employee by ID -> User can update employee details
- [x] Mutation: Delete Employee by ID -> User can delete employee by ID
- [x] Query: Search employee by designation or departmnet -> User can get employee details by designation or department

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

```

```
