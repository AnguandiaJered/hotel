const mongoose = require('mongoose');

const schema = mongoose.Schema({
    designation:{
        type:String,
        require:true
    },
    montant:{
        type:Number,
        require:true
    },
    devise:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("Classeroom",schema);