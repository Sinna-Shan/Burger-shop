/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const session = require("express-session");

// routers

const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const supplierRouter = require("./routers/supplierRouter");
const orderRouter = require("./routers/orderRouter");
const authRouter = require("./routers/authRouter");

const app = express();
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/suppliers", supplierRouter);
app.use("/api/v1/orders", orderRouter);

module.exports = app;
