import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    room: { type: String, required: true },
    hotel: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    guests: { type: Number, required: true },
    pricePerNight: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
    isPaid: { type: Boolean, default: false },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
