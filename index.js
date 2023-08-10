const http = require('http');
const express = require("express");
const { connectDB } = require("./src/db/dbConnection");
const routes = require("./src/routes/v1")
const config = require("./src/config/config")

const app = express();

/** express using server **/
// console.log('hello ! server');
// app.get('/' , (req,res) => {
//     res.send('express server is running now')
//     console.warn('now you are using express');
//     res.end();
// });

// app.listen(8000);

/** Database connection */
connectDB();

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number 3000!");
});

/** Routes with Namespace (/v1) */
app.use("/v1" , routes);