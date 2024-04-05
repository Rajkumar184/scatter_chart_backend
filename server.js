require("dotenv").config({ path: "./.env" }); // dotenv connection

const express = require("express");
const chartRoutes = require("./routes/route"); // Ensure this path matches the name and location of your routes file

// Express setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS setup
const cors = require("cors");
app.use(cors());

// Database connection
require("./config/database");

// Use routes
app.use("/api", chartRoutes);

// Corrected the bitwise OR '|' to logical OR '||' for the default port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
