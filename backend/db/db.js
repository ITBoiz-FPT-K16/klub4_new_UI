const mongoose = require('mongoose')

const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser  :true
    }).then(()=> console.log('Database connected successfully'))
    .catch((error)=>console.log(error))
}

module.exports = connectToMongo