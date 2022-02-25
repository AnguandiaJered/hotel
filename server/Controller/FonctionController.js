const Fonction = require("../Model/FonctionModel");

module.exports.createFonction = async (req, res) =>{
    try {
        const fonction = Fonction({
            designation: req.body.designation
        });
        const data = await fonction.save();
        res.status(200).json({Fonction:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updateFonction = async (req, res) =>{
    try {
        const fonction = await Fonction.findByIdAndUpdate(req.body._id, {$set:{
            designation: req.body.designation
        }
    });
    res.status(200).json({Fonction:fonction});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showFonction = async (req, res) =>{
    try {
        const fonction = await Fonction.findOne(req.body);
        const data = fonction;
        res.status(200).json({Fonction:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deleteFonction = async (req, res) =>{
    try {
        const fonction = await Fonction.findByIdAndDelete(req.body);
        const data = fonction;
        res.status(200).json({Fonction:data});
    } catch (error) {
        res.status(500).send("err");
    }
}