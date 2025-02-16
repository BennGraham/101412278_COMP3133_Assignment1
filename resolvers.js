const { validationResult, check } = require("express-validator");
const { UserInputError } = require("apollo-server-express");
const User = require("./models/User");
const Employee = require("./models/Employee");

const resolver = {
  Query: {
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        return null;
      }

      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
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
      await Promise.all([
        check("username", "Username is required").notEmpty().run({ req: {} }),
        check("password", "Password is required").notEmpty().run({ req: {} }),
      ]);

      const errors = validationResult({ req: {} });
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new UserInputError("Signup validation failed", {
          validationErrors: errorMessages,
        });
      }

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
