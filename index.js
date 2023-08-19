const http = require('http');
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./src/db/dbConnection");
const routes = require("./src/routes/v1/index");
const config = require("./src/config/config");

const app = express();

/** express using server **/
// console.log('hello ! server');
// app.get('/' , (req,res) => {
//     res.send('express server is running now')
//     console.warn('now you are using express');
//     res.end();
// });

// app.listen(8000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Routes with Namespace (/v1) */
app.use("/v1", routes);

app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** create server using http */
const server = http.createServer(app);

/** Database connection */
connectDB();

server.listen(config.port, () => {
  console.log("server listning port number 3000!");
});