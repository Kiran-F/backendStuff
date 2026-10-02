import mongoose from "mongoose"
// import { DB_NAME } from "./constants";
import connectDB from "./db/db.js"

// require('dotenv').config({path: './env'}) //this works fine but disturbs the code structure so we use import code
//We try to load .env environment variables as soon as possible, so that as the app loads, the env variables are made available to all

import dotenv from "dotenv" // inorder to use this format, add "-r dotenv/config --experimental-json-modules" to the dev script in package.json
dotenv.config({
    path: './env'
})


connectDB()





/*
The following code is good to go but is making index.js over saturated.
// using iffi is a better approach, as will run immediately. using semicolon at the start is a good approach

import express from "express"
const app = express()

// should not connect database in a single line, always use try catch block and take care of async await

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR DETECTED: ", error)
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`)
        })
    } catch (error){
        console.error("ERROR: ", error)
        throw err
    }
})()
*/