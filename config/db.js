import mongoose from 'mongoose';

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://khyatisinghit21:WeatherWise@cluster0.souf9.mongodb.net/weather').then(()=>console.log("DB connected...!!!"));
}