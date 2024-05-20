const mongoose=require('mongoose')
// const colors=require('colors')

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/doctorsApp")
        console.log("CONNECTED Mongodb")

    }catch(error){
        console.log(`mongoose server issue  ${error}`)
    }
}
module.exports=connectDB