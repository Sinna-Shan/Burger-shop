const express = require('express');
const cors = require('cors');

// routers

const userRouter = require('./routers/userRouter');
// const productRouter = require('./routes/product');
// const supplierRouter = require('./routes/supplier');
// const orderRouter = require('./routes/order');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);

module.exports = app;