const mongoose = require ("mongoose");

const schema = mongoose.Schema;

const UserSchema = new schema({
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

    date:{
        type: Date,
        default: Date.now
},
    orders:{
        type: Array,
    },
    

});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
