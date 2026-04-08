import Booking from "../models/Booking.js";

// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const { room, hotel, checkInDate, checkOutDate, guests, pricePerNight } = req.body;
        const user = req.user._id;

        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

        if (nights <= 0) {
            return res.json({ success: false, message: "Check-out must be after check-in" });
        }

        const totalPrice = nights * pricePerNight;

        const booking = await Booking.create({ user, room, hotel, checkInDate, checkOutDate, guests, pricePerNight, totalPrice });

        res.json({ success: true, message: "Booking created successfully", booking });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get all bookings for the logged-in user
export const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user._id }).sort({ createdAt: -1 });

        res.json({ success: true, bookings });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Update check-in and check-out dates
export const updateBooking = async (req, res) => {
    try {
        const { checkInDate, checkOutDate } = req.body;
        const booking = await Booking.findOne({ _id: req.params.id, user: req.user._id });

        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }

        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

        if (nights <= 0) {
            return res.json({ success: false, message: "Check-out must be after check-in" });
        }

        booking.checkInDate = checkIn;
        booking.checkOutDate = checkOut;
        booking.totalPrice = nights * booking.pricePerNight;

        await booking.save();

        res.json({ success: true, message: "Booking updated successfully", booking });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Delete a booking
export const deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findOneAndDelete({ _id: req.params.id, user: req.user._id });

        if (!booking) {
            return res.json({ success: false, message: "Booking not found" });
        }

        res.json({ success: true, message: "Booking deleted successfully" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
