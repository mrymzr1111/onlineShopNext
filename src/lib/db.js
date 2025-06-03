
console.log("MongoDB connection script loaded...");
import { MongoClient, ServerApiVersion } from "mongodb";
//HelloWorld9%40  Maryam25
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
async function getDB(dbName) {
  console.log("Before MongoDB connection attempt...");
  try {
   
    console.log("Attempting to connect to MongoDB...");
    // Attempt to connect
    await client.connect();
    console.log("Attempting to connect to MongoDB...");
    // Log successful connection
    console.log("Successfully connected to MongoDB!");

    // Check the connection state
    // const serverInfo = await client.db().admin().serverStatus();
    // console.log("MongoDB Server Info:", serverInfo);

    // Return the database instance
    return client.db(dbName);
  } catch (error) {
    // Log errors if any
    console.error("Error connecting to MongoDB:", error.stack || error.message);
    throw error; // Rethrow error for further handling
  }
}

// Function to get a collection from DB

export async function getCollection(collectionName) {
  console.log("Calling getDB for collection:", collectionName); 
  const db = await getDB("next_blog_db");
  if (db) {
    console.log("Returning collection:", collectionName);
    return db.collection(collectionName);
  }
  return null;
}

// Ensure the connection is closed properly when the process ends
console.log("MongoDB connection closed");
async function closeConnection() {
  await client.close();
 
}

process.on('SIGINT', async () => {
  await closeConnection();
  process.exit();
});
