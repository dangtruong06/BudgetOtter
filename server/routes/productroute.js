import express from "express"
const router = express.Router();
import Product from "../models/productmodel.js"

//get all transaction

//post a transaction
router.post('/', async (req,res)=>{
    
    try{
        const transaction = new Product(req.body)
        const saved = await transaction.save()
        res.status(200).json(saved)
        console.log(req.body)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
    
});
//delete a transaction

export default router