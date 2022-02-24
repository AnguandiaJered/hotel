const mongoose = require('mongoose');

const schema = mongoose.Schema({
  
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
    datepaie:{
        type:Date,
        default:Date.now
    },
    refreservation:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    }

});

module.exports = mongoose.model("Paiehotel",schema);