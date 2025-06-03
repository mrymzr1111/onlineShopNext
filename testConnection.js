// import dotenv from 'dotenv';  // Make sure dotenv is imported
// dotenv.config();  // This should be called as the first thing in the file

// console.log("MongoDB URI: ", process.env.DB_URI);

// import { MongoClient, ServerApiVersion } from "mongodb";

// // Check if DB_URI exists in environment variables
// if (!process.env.DB_URI) {
//   console.log("MongoDB URI not found");
//   throw new Error("Mongo URI not found");
// }

// // Create a new MongoClient instance
// const client = new MongoClient(process.env.DB_URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// // Function to connect to the DB and log status
// async function getDB(dbName) {
//   console.log("Before MongoDB connection attempt...");
//   try {
//     console.log("Attempting to connect to MongoDB...");
//     await client.connect();
//     console.log("Successfully connected to MongoDB!");
//     const serverInfo = await client.db().admin().serverStatus();
//     console.log("MongoDB Server Info:", serverInfo);
//     return client.db(dbName);
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.stack || error.message);
//     throw error;
//   }
// }

// // Function to get a collection from DB
// export async function getCollection(collectionName) {
//   console.log("Calling getDB for collection:", collectionName);
//   const db = await getDB("next_blog_db");
//   if (db) {
//     console.log("Returning collection:", collectionName);
//     return db.collection(collectionName);
//   }
//   return null;
// }

// async function closeConnection() {
//   await client.close();
//   console.log("MongoDB connection closed");
// }

// process.on('SIGINT', async () => {
//   await closeConnection();
//   process.exit();
// });
import dotenv from 'dotenv';  // Import dotenv to load environment variables
import { MongoClient, ServerApiVersion } from 'mongodb';  // Import MongoClient from mongodb

dotenv.config();  // Load the environment variables from the .env.local file

console.log("MongoDB connection script loaded...");

// Check if DB_URI exists in environment variables
if (!process.env.DB_URI) {
  console.log("MongoDB URI not found");
  throw new Error("Mongo URI not found");
}

// Create a new MongoClient instance
const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function to connect to the DB and log status
async function testConnection() {
  try {
    console.log("Attempting to connect to MongoDB...");

    // Attempt to connect to MongoDB
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // Log successful connection
    const serverInfo = await client.db().admin().serverStatus();
    console.log("MongoDB Server Info:", serverInfo);

    // Optionally, you can query a collection or database here to ensure everything works.

  } catch (error) {
    // Log any errors that occur during the connection attempt
    console.error("Error connecting to MongoDB:", error.stack || error.message);
  } finally {
    // Close the connection once done
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

// Call the testConnection function
testConnection();
