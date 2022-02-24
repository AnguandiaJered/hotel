const mongoose = require('mongoose');

const schema = mongoose.Schema({
    matricule:{
        type:String,
        require:true
    },
    noms:{
        type:String,
        require:true
    },
    datenaissance:{
        type:Date,
        require:true
    },
    sexe:{
        type:String,
        require:true
    },
    etatcivil:{
        type:String,
        require:true
    },
    adresse:{
        type:String,
        require:true
    },
    telephone:{
        type:String,
        require:true
    },
    mail:{
        type:String,
        require:true
    },
    etude:{
        type:String,
        require:true
    },
    provinceorigine:{
        type:String,
        require:true
    },
    fonction:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
});


module.exports = mongoose.model("Personnel",schema);