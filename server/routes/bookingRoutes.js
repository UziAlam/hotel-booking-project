import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createBooking, getUserBookings, updateBooking, deleteBooking } from "../controller/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post("/", protect, createBooking);
bookingRouter.get("/", protect, getUserBookings);
bookingRouter.put("/:id", protect, updateBooking);
bookingRouter.delete("/:id", protect, deleteBooking);

export default bookingRouter;
