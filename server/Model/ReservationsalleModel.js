const mongoose = require('mongoose');

const schema = mongoose.Schema({
    refclient:{
        type:String,
        require:true
    },
    datereservation:{
        type:Date,
        default:Date.now
    },
    refsalle:{
        type:String,
        require:true
    },  
    libelle:{
        type:String,
        require:true
    },
    dateceremonie:{
        type:Date,
        require:true
    }
    
});

module.exports = mongoose.model("Reservationsalle",schema);