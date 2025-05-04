const mongoose= require ('mongoose');
const dotenv= require ('dotenv');
function dbConnect (){
    mongoose.connect (process.env.DATABASE).then(()=>
        console.log("connected to database")
    )
}


module.exports=dbConnect()
