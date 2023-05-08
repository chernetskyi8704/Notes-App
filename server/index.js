require("dotenv").config();
import http from "http";

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router/index.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
const app = express();
const corsOptions = require("./config/corsOptions.js");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api", router);
app.use(errorMiddleware);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://main--chernetskyi-notes-taking-app.netlify.app");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const server = http.createServer(app);

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Mongodb connected");
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});
