import "express-async-errors";
import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";

import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";

import cloudinary from "cloudinary";

import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import placesRoute from "./routes/placesRoute.js";
import bookingRoute from "./routes/bookingRoute.js";

//middleware
import { authenticateUser } from "./middlewares/authMiddleware.js";
import upload from "./middlewares/multerMiddleware.js";

//public folder
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

if (process.env.NODE_ENV !== "production") {
  console.log("dev mode");
}

const app = express();

//dev use
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

app.use(mongoSanitize());
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, "./client/dist")));
// app.use(express.static(path.resolve(__dirname, "./public")));

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.post("/api/v1/upload", upload.array("photos", 100), (req, res) => {
  const data = req.files.map((file) => file.filename);
  res.status(StatusCodes.OK).json({ data });
});
app.post("/api/v1/upload-avatar", upload.single("avatar", 100), (req, res) => {
  // const data = req.files.map((file) => file.filename);
  res.status(StatusCodes.OK).json({ data: [req.file.filename] });
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", authenticateUser, userRoute);
app.use("/api/v1/places", placesRoute);
app.use("/api/v1/booking", bookingRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

app.use((err, req, res, next) => {
  const status = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something went wrong.";
  res.status(status).json({ msg });
});

const port = process.env.PORT || 5200;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
