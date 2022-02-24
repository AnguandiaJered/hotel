const mongoose = require('mongoose');

const schema = mongoose.Schema({
    noms:{
        type:String,
        require:true
    },
    sexe:{
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
    datenaissance:{
        type:Date,
        require:true
    },
    profession:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("Client",schema);