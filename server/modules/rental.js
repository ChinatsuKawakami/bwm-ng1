const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title:{type:String, required: true, max:[128,'Too long, max is 128 characters']},
    city:{type:String, require:true, lowercase:true},
    street:{type:String, require:true, min:[4,'Too short, min is 4 characters']},
    category:{type:String, require:true, lowercase:true},
    image:{type:String, require:true},
    badrooms:Number,
    shared:Boolean,
    description:{type:String,require:true},
    dailyRate:Number,
    createdAt:{type:Date,default:Date.now}

});

module.exports = mongoose.model('Rental',rentalSchema);