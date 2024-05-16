import express from "express";
import authRuotes from"./routes/authroutes.js"
import dotenv from "dotenv";
import connectMongoDb from "./db/connectMongoDb.js";
dotenv.config();
const app =express ();
const PORT=process.env.PORT|| 5000;

app.use("/api/auth",authRuotes);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectMongoDb();
})