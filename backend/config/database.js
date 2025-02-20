// Importing the Mongoose library
const mongoose = require("mongoose");

// Direct MongoDB connection URL
const mongoURL = "mongodb+srv://abhishekmali9503:GnOTlxzq3zwHXjsU@cluster0.qukvq.mongodb.net/malinewdatabase";

// Defining a function to connect to the database
const dbConnect = () => {
	// Connecting to the database using the direct URL
	mongoose
		.connect(mongoURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		// If the connection is successful, log a success message
		.then(() => console.log("DB CONNECTION SUCCESS"))
		// If there are issues connecting to the database, log an error message and exit the process
		.catch((err) => {
			console.log("DB CONNECTION ISSUES");
			console.error(err.message);
			process.exit(1);
		});
};

// Exporting the dbConnect function for use in other files
module.exports = dbConnect;
