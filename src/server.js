const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("../swagger.json")
const app = express();

const dotenv = require("dotenv");

// Config ambient variables
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()); // header("Access-X")


// Loading Api routes
require("./routes/routes")(app);

// Loading swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running", { port: PORT, mode: process.env.NODE_ENV });
});
