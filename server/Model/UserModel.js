const mongoose = require('mongoose');

const schema = mongoose.Schema({
    noms:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    mail:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("User",schema);