import express, { response } from "express";
const app = express();
import mongoose from "mongoose"
import { MongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"
const port = 5555


// Midddleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());
// option 1: Allow all origins with default of cors
// option 2: Allow custom origins
//app.use(cors({
//    origin: "http://localhost:5555",
//    methods: ['GET', 'POST', 'PUT', 'DELETE'],
//    allowedHeaders: ['content-type'],
//})
//);

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the page")
})

app.use("/books", booksRoute);

mongoose.connect(MongoDBURL)
.then(() => {
    console.log("App connected to database")
    app.listen(port, () => {
        console.log(`App is listening to port: ${port}`)
    });

})
.catch((error) => {
    console.log(error)
});