
 import "server-only"

import { MongoClient, ServerApiVersion } from "mongodb";


type User = {
  _id: string;
  email: string;
  password: string;
  // add any other user fields you store
};


if (!process.env.DB_URI) {
  throw new Error("Mongo URI not found!");
}

const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getDB(dbName:string) {
  try {
    await client.connect();
    console.log(">>>>Connected to DB<<<<");
    return client.db(dbName);
  } catch (err) {
    console.log(err);
  }
}

export async function getCollection(collectionName:string) {
  const db = await getDB("next_blog_db");
  if (db) return db.collection(collectionName);

  return null;
}


export async function findUserByEmail(email: string): Promise<User | null> {
  const usersCollection = await getCollection("users");
  if (!usersCollection) return null;

  const user = await usersCollection.findOne({ email });
  return user as User | null;
}

