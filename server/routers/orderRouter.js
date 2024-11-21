const router = require('express').Router();
const { placeOrder } = require('../controllers/orderController');

router.post('/place-order', placeOrder);

module.exports = router;