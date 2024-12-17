import express from "express"
import cors from "cors"
import {connectDB} from './config/db.js';
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
// app config
const app = express()
const port = 4000

//middleware 
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/user", userRouter)


app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://khyatisinghit21:WeatherWise@cluster0.souf9.mongodb.net/?