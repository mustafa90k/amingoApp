const mongoose = require ("mongoose");

const schema = mongoose.Schema;

const ServiceSchema = new schema({

    serviceName:{
        type: String,
        
},
    category:{
        type: String,
    
},
    description:{
        type: String,

},
    rating:{
        type: Number,       
},
    
    

});

const ServiceSModel = mongoose.model("user", ServiceSchema);
module.exports = ServiceSModel;