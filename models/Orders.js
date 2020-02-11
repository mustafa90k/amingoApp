const mongoose = require ("mongoose");

const schema = mongoose.Schema;

const OrdersSchema = new schema({

    orderNumber:{
        type: Number,
    },

    customer:{
        type: Object,
        required :true
},
    worker:{
        type: Object,
        required :true

},
    service:{
        type: Object,
        required :true

},
    termsAndConditions:{
        type: String,   
},
    date:{
        type: Date,
 },
   
    

});

const OrdersModel = mongoose.model("user", OrdersSchema);
module.exports = OrdersModel;
