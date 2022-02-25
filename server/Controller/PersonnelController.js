const Personnel = require("../Model/PersonnelModel");

module.exports.createPersonnel = async (req , res) => {
    try {
        const personnel = Personnel({
            matricule: req.body.matricule,
            noms: req.body.noms,
            datenaissance: req.body.datenaissance,
            sexe: req.body.sexe,
            etatcivil: req.body.etatcivil,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            mail: req.body.mail,
            etude: req.body.etude,
            provinceorigine: req.body.provinceorigine,
            fonction: req.body.fonction,
            photo: req.body.photo
        });
        const data = await personnel.save();
        res.status(200).json({Personnel:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updatePersonnel = async (req , res) => {
    try {
        const personnel = await Personnel.findByIdAndUpdate(req.body._id, {$set:{
            matricule: req.body.matricule,
            noms: req.body.noms,
            datenaissance: req.body.datenaissance,
            sexe: req.body.sexe,
            etatcivil: req.body.etatcivil,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            mail: req.body.mail,
            etude: req.body.etude,
            provinceorigine: req.body.provinceorigine,
            fonction: req.body.fonction,
            photo: req.body.photo
        }
    });

    res.status(200).json({Personnel:personnel});
    } catch (error) {
        res.status(200).json("err");
    }
}

module.exports.showPersonnel = async (req , res) => {
    try {
        const personnel = await Personnel.findOne(req.body);
        const data = personnel;
        res.status(200).json({Personnel:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deletePersonnel = async (req , res) => {
    try {
        const personnel = await Personnel.findByIdAndDelete(req.body);
        const data = personnel;
        res.status(200).json({Personnel:data});
    } catch (error) {
        res.status(500).send("err");
    }
}