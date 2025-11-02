import mongoose from "mongoose";
const api_key=process.env.DB_key;

export const  connectDB = async () =>{

    await mongoose.connect(api_key).then(()=>console.log("DB Connected"));          //'{ Add your mongodb URI Here }/food-del'
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.