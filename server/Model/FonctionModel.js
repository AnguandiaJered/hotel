const mongoose = require('mongoose');

const schema = mongoose.Schema({
    designation:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("Fonction",schema);