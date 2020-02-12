const Schema = mongoose.Schema;


const FeedSchema = new Schema({
   
    firstName :{
        type : schema.ObjectId,  
        ref : 'Workers'
 },

    lastname:{
        type: Schema.ObjectId,
        ref :'Workers'

},
    email:{
        type: Schema.ObjectId,
        ref :'Workers'
 },

    image :{
        type :schema.ObjectId,
        ref :'Workers' //url for the image , because nobody uploads data to the servers.       
},
    

    rating :{
        type : schema.ObjectId,
        ref :'Workers' 
 },
    phoneNumber :{
        type : schema.ObjectId,
        ref : 'Workers'
},

    date :{
        type : Date,
        default : Date.now,
 },
    
});

const FeedModel = mongoose.model("feed", FeedSchema);
module.exports = FeedModel;
