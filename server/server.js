import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import authRouter from "./routes/authRoutes.js";

connectDB()

const app = express()
app.use(cors())

// MIDDLEWARE
app.use(express.json())

app.get('/', (req, res) => res.send("API is working"))
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/hotels', hotelRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
