import express from "express";
import authRuotes from "./routes/authroutes.js"
import userRoutes from "./routes/userRoutes.js"
import postroutes from "./routes/postroutes.js"
import notificationroutes from "./routes/notificationroutes.js"
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import connectMongoDb from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUND_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());//to parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRuotes);
app.use("/api/users", userRoutes);
app.use("/api/post", postroutes);
app.use("/api/notifications",notificationroutes);
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectMongoDb();
})
