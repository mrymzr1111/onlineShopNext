
 import "server-only"
import {  Collection} from "mongodb";
// import { MongoClient, ServerApiVersion ,ObjectId} from "mongodb";
import { Document, ObjectId,  MongoClient, ServerApiVersion } from "mongodb";

// export interface User extends Document {
//   _id: string;
//   email: string;
//   password: string;
// }

// export interface Merchandise extends Document {
//   _id: string;
//   name: string;
//   price: number;
// }
export interface User extends Document {
  _id: ObjectId;
  email: string;
  password: string;
}

export interface Merchandise  extends Document{
  // _id: ObjectId;
  // name: string;
  // price: number;


   _id?: ObjectId;
  image: string;
  title: string;
  description: string;
  price: number;
  userId: ObjectId;
}

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

export async function getCollection<T extends Document>(collectionName:string): Promise<Collection<T> | null> {
  const db = await getDB("next_blog_db");
  if (db) return db.collection<T>(collectionName);

  return null;
}


export async function findUserByEmail(email: string): Promise<User | null> {
  const usersCollection = await getCollection<User>("users");
  if (!usersCollection) return null;

  const user = await usersCollection.findOne({ email });
  return user as User ;
}

