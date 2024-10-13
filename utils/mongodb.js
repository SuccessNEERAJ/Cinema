import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

JSON.stringify(process.env.MONGO_URL)

mongoose
  .connect((process.env.MONGO_URL), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected ..."))
  .catch((err) => console.log(err));

console.log(process.env.MONGO_URL);
