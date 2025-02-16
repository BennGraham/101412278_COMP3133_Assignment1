const User = require("./models/User");
const Employee = require("./models/Employee");

const resolver = {
  Query: {
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user || user.password !== password) {
        return null;
      }
      return user;
    },

    employees: async () => {
      return await Employee.find();
    },

    employee: async (_, { id }) => {
      return await Employee.findById(id);
    },

    employeesByDesignation: async (_, { designation }) => {
      return await Employee.find({ designation });
    },

    employeesByDepartment: async (_, { department }) => {
      return await Employee.find({ department });
    },
  },

  Mutation: {
    signup: async (_, { username, email, password }) => {
      // TODO: might need to check if the user is already in db
      const user = new User({ username, password, email });
      return await user.save();
    },

    addEmployee: async (_, newEmployee) => {
      const employee = new Employee(newEmployee);
      return await employee.save();
    },

    updateEmployee: async (_, { employeeId, updates }) => {
      return await Employee.findByIdAndUpdate(
        employeeId,
        { $set: updates },
        { new: true, runValidators: true }
      );
    },

    deleteEmployee: async (_, { id }) => {
      return await Employee.findByIdAndDelete(id);
    },
  },
};

module.exports = resolver;
