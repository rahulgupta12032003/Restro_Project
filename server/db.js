const mongoose = require('mongoose')

const MONGO_DB_URL = "mongodb+srv://rahulgupta630738:PN0yLyedIsRsTkqV@cluster0.lpem8ik.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Server is successfully connected to MongoDB Database");
});

db.on("error", (error) => {
    console.log("Database Error", error);
})