import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.evn.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  let mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect= async (): Promise<Mongoose>  => {
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        cached.promise = mongoose.connect({
            MONGODB_URI, 
            dbName:'miopetit'}).then((result) => {
                console.log("CONNECTED to MongoDB")
                return result;
            }).catch((error) => {
                console.log("Error connecting to MongoDB", error);
                throw error;
                
            })
        })
    }
    cached.conn = await cached.promise;
    return cached.connect;
};

export default dbConnect;
