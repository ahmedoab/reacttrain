const express = require('express');
const app = express();
const db = require('./models');
const cors = require("cors");

app.use(cors());
app.use(express.json());

//routers

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
app.listen(3001, () => {
    console.log("Server running on port 3001");
});
});