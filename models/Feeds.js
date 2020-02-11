const mongoose = require ("mongoose");

const Schema = mongoose.Schema;


const FeedSchema = new Schema({
    offers :{
        type : String,  
    },
    image :{
        type :String //url for the image , because nobody uploads data to the servers.       
    },
    
hashtage: {
    type: Array,
    },
  
recommendation: {
        type : String,
    },

rating :{
        type : Number,  
    },

date :{
        type : Date,
        default : Date.now,
    },
    
});

const FeedModel = mongoose.model("feed", FeedSchema);
module.exports = FeedModel;
