const Salle = require("../Model/SalleModel");

module.exports.createSalle = async (req , res) =>{
    try {
        const salle = Salle({
            designation: req.body.designation,
            prix: req.body.prix,
            devise: req.body.devise
        });
        const data = await salle.save();
        res.status(200).json({Salle:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updateSalle = async (req , res) =>{
    try {
        const salle = await Salle.findByIdAndUpdate(req.body._id, {$set:{
            designation: req.body.designation,
            prix: req.body.prix,
            devise: req.body.devise
        }
    });
    res.status(200).json({Salle:salle});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showSalle = async (req , res) =>{
    try {
        const salle = await Salle.findOne(req.body);
        const data = salle;
        res.status(200).json({Salle:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.showAllSalle = async (req , res) =>{
    try {
        const salle = await Salle.find();
        const data = salle;
        res.status(200).json({Salle:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deleteSalle = async (req , res) =>{
    try {
        const salle = await Salle.findByIdAndDelete(req.body);
        const data = salle;
        res.status(200).json({Salle:data});
    } catch (error) {
        res.status(500).send("err");
    }
}