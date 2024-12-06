import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  createCheckoutSession,
  checkoutSuccess,
} from "../controllers/payment.controller.js";

import { RazorpayInstance } from "../lib/razorpay.js";

const router = express.Router();

router.post("/create-checkout-session", protectRoute, createCheckoutSession);
router.post("/checkout-success", protectRoute, checkoutSuccess);

async function createRazorpayInstanceCoupon(discountPercentage) {
  const coupon = await RazorpayInstance.coupons.create({
    percent_off: discountPercentage,
    duration: "once",
  });

  return coupon.id;
}

async function createNewCoupon(userId) {
  const newCoupon = new Coupon({
    code: "GIFT" + Math.random().toString(36).substring(2, 8).toUpperCase(),
    discountPercentage: 10,
    expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    userId: userId,
  });

  await newCoupon.save();
  return newCoupon;
}

export default router;
