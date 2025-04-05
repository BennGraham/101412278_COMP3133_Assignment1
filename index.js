const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const schema = require("./schema");
const resolver = require("./resolvers");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;
const mongodb_atlas_url = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    mongoose
      .connect(mongodb_atlas_url)
      .then((success) => {
        console.log("Success Mongodb connection");
      })
      .catch((err) => {
        console.log("Error Mongodb connection:", err.message);
      });
  } catch (error) {
    console.log(`Unable to connect to DB : ${error.message}`);
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolver,
});

const app = express();
app.use(express.json());
app.use("*", cors());

server.applyMiddleware({ app });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started at http://0.0.0.0:${PORT}${server.graphqlPath}`);
  connectDB();
});
