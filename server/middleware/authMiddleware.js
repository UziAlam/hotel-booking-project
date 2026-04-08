import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.json({ success: false, message: "Not Authorised" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.json({ success: false, message: "Not Authorised" });
        }
        req.user = user;
        next();
    } catch (error) {
        res.json({ success: false, message: "Not Authorised" });
    }
};
