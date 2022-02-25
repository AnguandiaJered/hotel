const Paiesalle = require("../Model/PaiesalleModel");

module.exports.createPaiesalle = async (req , res) =>{
    try {
        const paiesalle = Paiesalle({
            montant: req.body.montant,
            devise: req.body.devise,
            libelle: req.libelle,
            datepaie: req.body.datepaie,
            refreservation: req.body.refreservation,         
            author: req.body.author
        });
        const data = await paiesalle.save();
        res.status(200).json({Paiesalle:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updatePaiesalle = async (req , res) =>{
    try {
        const paiesalle = await Paiesalle.findByIdAndUpdate(req.body._id, {$set:{
            montant: req.body.montant,
            devise: req.body.devise,
            libelle: req.libelle,
            datepaie: req.body.datepaie,
            refreservation: req.body.refreservation,         
            author: req.body.author
        }
    });
    res.status(200).json({Paiesalle:paiesalle});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showPaiesalle = async (req , res) =>{
    try {
        const paiehotel = await Paiesalle.findOne(req.body);
        const data = paiehotel;
        res.status(200).json({Paiesalle:data});
    } catch (error) {
        res.status(200).send("err");
    }
}

module.exports.deletePaiesalle = async (req , res) =>{
    try {
        const paiesalle = await Paiesalle.findByIdAndDelete(req.body);
        const data = paiesalle;
        res.status(200).json({Paiesalle:data});
    } catch (error) {
        res.status(200).send("err");
    }
}