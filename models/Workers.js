const mongoose = require ("mongoose");

const schema = mongoose.Schema;

const WorkersSchema = new schema({
    firstname:{
        type: String,
        required :true
},
    lastname:{
        type: String,
        required :true

},
    email:{
        type: String,
        required :true

},
    password:{
        type: String,
        required :true
},
    dateOfBirth:{
        type: Date,
 },
    phoneNumber :{
    type : String,
},

    rating:{
        type: Number,
    },
    

});

const WorkersModel = mongoose.model("user", WorkersSchema);
module.exports = WorkersModel;
