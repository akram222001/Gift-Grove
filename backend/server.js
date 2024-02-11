// const app = require("./app");

// const dotenv = require("dotenv");

// const connectDatabase = require("./config/database")

// // Handling Ucaught Exception
// process.on("uncaughtException", (err)=>{
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to Uncaught Exceprion`);
//     process.exit(1);
// })


// //config
// dotenv.config({path:"backend/config/config.env"});

// //Connect to databas
// connectDatabase();

// const server = app.listen(process.env.PORT,()=>{
//     console.log(`server is working on http://localhost:${process.env.PORT}`)
// });

// // Unhandled promis Rejection
// process.on("unhandledRejection",err=> {
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to Unhandle promise Rejection`);

//     server.close(()=>{
//         process.exit(1);
//     });
// });








const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.error(`Error: ${err.message}`);
    console.error("Shutting down the server due to Uncaught Exception");
    process.exit(1);
});

// Load environment variables
dotenv.config({ path: "backend/config/config.env" });

// Connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Unhandled promise Rejection
process.on("unhandledRejection", (err) => {
    console.error(`Error: ${err.message}`);
    console.error("Shutting down the server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
});

