const Chambre = require("../Model/ChambreModel");

module.exports.createChambre = async (req , res) => {
    try {
        const chambre = Chambre({
            numchambre: req.body.numchambre,
            telephone: req.body.telephone,
            refclasse: req.body.refclasse
        });
        const data = await chambre.save();
        res.status(200).json({Chambre:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updateChambre = async (req , res) => {
    try {
        const chambre = await Chambre.findByIdAndUpdate(req.body._id, { $set:{
            numchambre: req.body.numchambre,
            telephone: req.body.telephone,
            refclasse: req.body.refclasse 
        }
    });
    res.status(200).json({Chambre:chambre});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showChambre = async (req, res) =>{
    try {
        const chambre = await Chambre.findOne(req.body);
        const data = chambre;
        res.status(200).json({Chambre:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deleteChambre = async (req, res) =>{
    try {
        const chambre = await Chambre.findByIdAndDelete(req.body);
        const data = chambre;
        res.status(200).json({Chambre:data});
    } catch (error) {
        res.status(500).send("err");
    }
}