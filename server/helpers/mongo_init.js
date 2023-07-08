const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// console.log(process.env.MONGO_DB_URL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Server is successfully connected to MongoDB Database");
});

db.on("error", (error) => {
  console.log("Database Error", error);
});
