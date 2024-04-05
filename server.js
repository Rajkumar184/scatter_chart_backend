require("dotenv").config({ path: "./.env" }); 

const express = require("express");
const chartRoutes = require("./routes/route"); 

// Express setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS setup
const cors = require("cors");
app.use(cors(
	{
		origin: ["https://scatter-chart.vercel.app", "http://localhost:3000"],
		methods: ["POST", "GET"],
		credentials: true
	}
));

// Database connection
require("./config/database");

// Use routes
app.use("/api", chartRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
