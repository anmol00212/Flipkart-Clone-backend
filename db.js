import mongoose from "mongoose"
import dotenv from 'dotenv'


dotenv.config({path: './config.env'});

const URL = process.env.DB










const Connection = async() =>{
    try{
  await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
  console.log('Database connected successfully')
}catch(error){
    console.log('Error', error.message);
}
}


export default Connection

