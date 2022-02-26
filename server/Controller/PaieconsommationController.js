const Paieconsommation = require("../Model/PaieconsommationModel");

module.exports.createPaieconsommation = async (req , res) =>{
    try {
        const paieconsomme = Paieconsommation({
            refclient: req.body.refclient,
            datepaie: req.body.datepaie,
            montant: req.body.montant,
            devise: req.body.devise,
            libelle: req.body.libelle,
            author: req.body.author
        });
        const data = await paieconsomme.save();
        res.status(200).json({Paieconsommation:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updatePaieconsommation = async (req , res) =>{
    try {
        const paieconsomme = await Paieconsommation.findByIdAndUpdate(req.body._id, {$set:{
            refclient: req.body.refclient,
            datepaie: req.body.datepaie,
            montant: req.body.montant,
            devise: req.body.devise,
            libelle: req.body.libelle,
            author: req.body.author
        }
    });
    res.status(200).json({Paieconsommation:paieconsomme});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showPaieconsommation = async (req , res) =>{
    try {
        const paieconsomme = await Paieconsommation.findOne(req.body);
        const data = paieconsomme;
        res.status(200).json({Paieconsommation:data});
    } catch (error) {
        res.status(200).send("err");
    }
}

module.exports.showAllPaieconsommation = async (req , res) =>{
    try {
        const paieconsomme = await Paieconsommation.find();
        const data = paieconsomme;
        res.status(200).json({Paieconsommation:data});
    } catch (error) {
        res.status(200).send("err");
    }
}

module.exports.deletePaieconsommation = async (req , res) =>{
    try {
        const paieconsomme = await Paieconsommation.findByIdAndDelete(req.body);
        const data = paieconsomme;
        res.status(200).json({Paieconsommation:data});
    } catch (error) {
        res.status(200).send("err");
    }
}