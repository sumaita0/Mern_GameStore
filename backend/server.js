import express from "express";
import dotenv from "dotenv";

import authRouters from "./routes/auth.route.js";
import cartRoutes from "./routes/cart.route.js";
import productRouters from "./routes/product.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app= express();
const PORT = process.env.PORT || 2000;

app.use(express.json({}));
app.use(cookieParser());

app.use("/api/auth",authRouters);
app.use("/api/products",productRouters);
app.use("/api/cart",cartRoutes);
app.use("/api/coupons",couponRoutes);
app.use("/api/payments",paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(PORT,()=>{

    console.log("server is running on http://localhost:"+PORT);
    connectDB();

});