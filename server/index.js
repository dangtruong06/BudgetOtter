import express from "express";
import mongoose from "mongoose";
import transactionRoutes from "./routes/productroute.js";
import cors from "cors";

const PORT = 3000;

const app = express()
app.use(cors()); // allow everything
//middleware
app.use(express.json())
app.use('/api/transactions', transactionRoutes);


//connect database
mongoose.connect('mongodb+srv://dangtony:Ilovesteak123@cluster0.lqtas3j.mongodb.net/?appName=Cluster0')
        .then(()=> console.log("Database connected"))
        .catch(err => console.log(err));

//start server
app.listen(PORT, (req,res) => {
    console.log(`App listening on port ${PORT}`)
})