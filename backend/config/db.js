import mongoose from 'mongoose';

export const connectDB = ()=>{
     mongoose.connect('mongodb://127.0.0.1/DB-dari-mouch')
     .then(()=>console.log("data is connected"))
     .catch((err)=>console.log(err))
}
