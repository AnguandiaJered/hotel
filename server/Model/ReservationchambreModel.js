const mongoose = require('mongoose');

const schema = mongoose.Schema({
    refclient:{
        type:String,
        require:true
    },
    refchambre:{
        type:String,
        require:true
    },
    dateentree:{
        type:Date,
        require:true
    },
    datesortie:{
        type:Date,
        require:true
    },
    libelle:{
        type:String,
        require:true
    },
    nombrejour:{
        type:Number,
        require:true
    },
    prix:{
        type:Number,
        require:true
    }, 
    devise:{
        type:String,
        require:true
    }, 
    datereservation:{
        type:Date,
        default:Date.now
    },
    observation:{
        type:String,
        require:true
    },
    provenance:{
        type:Date,
        require:true
    }
    
});

module.exports = mongoose.model("Reservationchambre",schema);