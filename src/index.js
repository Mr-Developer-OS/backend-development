
// require('dotenv').config({psth : './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"

dotenv.config({
    path : './env'
})

connectDB()

const app = express()

/* IIFE  --> Directly 1st approach
;(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("Error :",error)
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on Port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("Error : ",error)
        throw err
    }
})

*/

