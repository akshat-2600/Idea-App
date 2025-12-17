const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

/**
 * Make the mongodb connection
 */
(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connection Successful !");

    } catch (err) {
        console.log("Mongo Error ", err);
    }
})();

const PORT = 7070;

app.use(express.json());

//Bring morgan into use
const morgan = require('morgan');
app.use(morgan('dev'));

const idea_route = require("./routers/ideas.routes");
app.use("/ideas_app/v1", idea_route);

const auth_route = require("./routers/auth.routes");
app.use("/ideas_app/v1", auth_route);

app.listen(PORT, () => {
    console.log(`Server started running on the PORT number ${PORT}`);
})