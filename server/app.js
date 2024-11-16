const express = require('express');
const cors = require('cors');

// routers

const userRouter = require('./routers/userRouter');
const productRouter = require("./routers/productRouter");
// const supplierRouter = require('./routes/supplier');
// const orderRouter = require('./routes/order');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

module.exports = app;