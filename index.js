const express = require('express');
const app = express();

const PORT = 7070;

app.use(express.json());

//Bring morgan into use
const morgan = require('morgan');
app.use(morgan('dev'));

const idea_route = require("./routers/ideas.routes");
app.use("/ideas_app/v1", idea_route);


app.listen(PORT, () => {
    console.log(`Server started running on the PORT number ${PORT}`);
})