const Paiehotel = require("../Model/PaiehotelModel");

module.exports.createPaiehotel = async (req , res) =>{
    try {
        const paiehotel = Paiehotel({
            montant: req.body.montant,
            devise: req.body.devise,
            libelle: req.libelle,
            datepaie: req.body.datepaie,
            refreservation: req.body.refreservation,         
            author: req.body.author
        });
        const data = await paiehotel.save();
        res.status(200).json({Paiehotel:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updatePaiehotel = async (req , res) =>{
    try {
        const paiehotel = await Paiehotel.findByIdAndUpdate(req.body._id, {$set:{
            montant: req.body.montant,
            devise: req.body.devise,
            libelle: req.libelle,
            datepaie: req.body.datepaie,
            refreservation: req.body.refreservation,         
            author: req.body.author
        }
    });
    res.status(200).json({Paiehotel:paiehotel});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showPaiehotel = async (req , res) =>{
    try {
        const paiehotel = await Paiehotel.findOne(req.body);
        const data = paiehotel;
        res.status(200).json({Paiehotel:data});
    } catch (error) {
        res.status(200).send("err");
    }
}

module.exports.showAllPaiehotel = async (req , res) =>{
    try {
        const paiehotel = await Paiehotel.find();
        const data = paiehotel;
        res.status(200).json({Paiehotel:data});
    } catch (error) {
        res.status(200).send("err");
    }
}

module.exports.deletePaiehotel = async (req , res) =>{
    try {
        const paiehotel = await Paiehotel.findByIdAndDelete(req.body);
        const data = paiehotel;
        res.status(200).json({Paiehotel:data});
    } catch (error) {
        res.status(200).send("err");
    }
}