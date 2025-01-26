import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("connected");
        
    } catch (error) {
        console.log(error);
        
    }
}