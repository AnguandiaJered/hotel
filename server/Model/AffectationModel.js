const mongoose = require('mongoose');

const schema = mongoose.Schema({
    refpersonnel:{
        type:String,
        require:true
    },
    refservice:{
        type:String,
        require:true
    },
    dateaffectation:{
        type:Date,
        default:Date.now
    },
    montant:{
        type:Number,
        require:true
    },
    devise:{
        type:String,
        require:true
    },
    libelle:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    }

});


module.exports = mongoose.model("Affectation",schema);