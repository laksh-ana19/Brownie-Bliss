const express = require('express');
const router = express.Router();
const adminAuth = require('../../middlewares/adminAuth');
const {
  createOrder,
  getAllOrders,
  getOrder,
  confirmPayment,
  updateOrderStatus,
  getStats,
} = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/', adminAuth, getAllOrders);
router.get('/stats', adminAuth, getStats);
router.get('/:orderId', getOrder);
router.patch('/:orderId/confirm-payment', adminAuth, confirmPayment);
router.patch('/:orderId/status', adminAuth, updateOrderStatus);

module.exports = router;
