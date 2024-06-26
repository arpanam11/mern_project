const mongoose = require("mongoose")
//schema
const foodlistModel = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    id:{
        type:Number,
        unique:true,
        require:true
    },
    prize:{
        type:String,
        require:true
    },
})
//create model
const foodlist = mongoose.model('food', foodlistModel)
module.exports = food