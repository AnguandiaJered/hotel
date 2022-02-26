const Affectation = require("../Model/AffectationModel");

module.exports.createAffectation = async (req , res) =>{
    try {
        const affectation = Affectation({
            refpersonnel: req.body.refpersonnel,
            refservice: req.body.refservice,
            dateaffectation: req.body.dateaffectation,
            montant: req.body.montant,
            devise: req.body.devise,
            libelle: req.body.libelle,
            author: req.body.author
        });
        const data = await affectation.save();
        res.status(200).json({Affectation:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updateAffectation = async (req , res) =>{
    try {
        const affectation = await Affectation.findByIdAndUpdate(req.body._id, {$set:{
            refpersonnel: req.body.refpersonnel,
            refservice: req.body.refservice,
            dateaffectation: req.body.dateaffectation,
            montant: req.body.montant,
            devise: req.body.devise,
            libelle: req.body.libelle,
            author: req.body.author
        }
    });
    res.status(200).json({Affectation:affectation});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showAffectation = async (req , res) => {
    try {
        const affectation = await Affectation.findOne(req.body);
        const data = affectation;
        res.status(200).json({Affectation:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deleteAffectation = async (req , res) => {
    try {
        const affectation = await Affectation.findByIdAndDelete(req.body);
        const data = affectation;
        res.status(200).json({Affectation:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.showAllAffectation = async (req , res) => {
    try {
        const affectation = await Affectation.find();
        const data = affectation;
        res.status(200).json({Affectation:data});
    } catch (error) {
        res.status(500).send("err");
    }
}