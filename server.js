import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./server/configs/db.js";
import {clerkMiddleware} from '@clerk/express'
import userRouter from "./server/routes/userRoutes.js";
import hotelRouter from "./server/routes/hotelRoutes.js";

connectDB ()

const app = express()
app.use (cors()) 

//MIDDLEWARE
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res)=> res.send("API is working"))
app.use('/api/user', userRouter)
app.use('/api/hotels', hotelRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));