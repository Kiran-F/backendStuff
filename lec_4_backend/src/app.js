import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" //cookie-parser -> by using my server, i can access cookies in the user's browser and set cookies (CRUD operations in cookies of user's browser)

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
// look into white listing as well and more about cors

// each app.use() line adds different tool or helper to your server
app.use(express.json({limit: "16kb"})) //limiting data coming from frontend to avoid crash attacks from massive payload
app.use(express.urlencoded({extended: true, limit: "16kb"})) //Reads data coming from traditional HTML form submissions encoded in the URL. URL encoded data --->> usable javascript object. Extended let users send nested objects (optional)
app.use(express.static("public")) //Tells Express to serve files directly from a folder named "public".
app.use(cookieParser()) //Reads and sets cookies attached to incoming browser requests.

export { app }