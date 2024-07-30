import mongoose from 'mongoose';
const { Schema } = mongoose;


const productschema = new Schema({


    title :String,
    price: Number,
    description: String,
    category:String,
})


export const  product = mongoose.model('product', productschema);