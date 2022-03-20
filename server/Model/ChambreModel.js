const mongoose = require('mongoose');

const schema = mongoose.Schema({
    numchambre:{
        type:String,
        require:true
    },
    telephone:{
        type:String,
        require:true
    },
    refclasse:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("Chambre",schema);