// import 'dotenv/config'
import express, { json } from "express"
import productRoutes from "./routers/products.routes.js"
import bodyParser from 'body-parser'
import { connectDB } from "./config/db.js"

const app = express()

connectDB()

app.use(bodyParser.json())

app.use('/', productRoutes)

app.use('*', (req,res,next)=>{
    res.json({
        message:"req i not found "
    })
})




app.use((err, req, res, next)=> {
  res.json({
    message: err ||"somthing went wrong try again"
  })
  })

app.listen(3000, () => {
    console.log("server is running")
})