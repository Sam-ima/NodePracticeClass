const mongoose= require('mongoose');
// mongoose.connect('mongodb+srv://samimamiya:samima123@cluster0.mmvv4dg.mongodb.net/?retryWrites=true&w=majority')
// .then(()=>{
//     console.log("Mongoose connected");
// })
// .catch((err)=>{
//     console.log('Error occured while connecting mongoDb',err);
// });

async function mongoDbConnection(){
    try{
        await mongoose.connect(
            "mongodb+srv://samimamiya:samima123@cluster0.mmvv4dg.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Connected")
    }catch{

        console.log("error");  
      }
} 

module.exports= mongoDbConnection;