import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect("mongodb+srv://ayushdekhane:WeSharePassword@cluster0.if7whqm.mongodb.net/food-del").then(()=>console.log("DB Connected"));          //'{ Add your mongodb URI Here }/food-del'
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.