import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";



const connectDB = async () => {
    try {
       const connectionInstanne = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
         console.log("Connected to MongoDB")
         console.log(`\n MongoDB connected: ${connectionInstanne.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDB;