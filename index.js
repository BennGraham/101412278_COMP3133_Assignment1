const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const schema = require("./schema");
const resolver = require("./resolvers");

const dotenv = require("dotenv");
dotenv.config();

const DB_NAME = "COMP3133";
const DB_USER_NAME = "benngraham";
const DB_PASSWORD = "4smI10a94mao2aNm";
const CLUSTER_ID = "i1w2f";
const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
const mongodb_atlas_url = process.env.MONGODB_URL || DB_CONNECTION;

const connectDB = async () => {
  try {
    mongoose
      .connect(mongodb_atlas_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((success) => {
        console.log("Success Mongodb connection");
      })
      .catch((err) => {
        console.log("Error Mongodb connection");
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

app.listen({ port: process.env.PORT }, () => {
  console.log(
    `Server started at http://localhost:${process.env.PORT}${server.graphqlPath}`
  );
  connectDB();
});
