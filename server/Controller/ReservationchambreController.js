const Reservationchambre = require("../Model/ReservationchambreModel");

module.exports.createReservationchambre = async (req , res) => {
    try {
        const reserveroom = Reservationchambre({
            refclient: req.body.refclient,
            refchambre: req.body.refchambre,
            dateentree: req.body.dateentree,
            datesortie: req.body.datesortie,
            libelle: req.body.libelle,
            nombrejour: req.body.nombrejour,
            prix: req.body.prix,
            devise: req.body.devise,
            datereservation: req.body.datereservation,
            observation: req.body.observation,
            provenance: req.body.provenance
        });
        const data = await reserveroom.save();
        res.status(200).json({Reservationchambre:data})
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updateReservationchambre = async (req , res) => {
    try {
        const reserveroom = await Reservationchambre.findByIdAndUpdate(req.body._id, {$set:{
            refclient: req.body.refclient,
            refchambre: req.body.refchambre,
            dateentree: req.body.dateentree,
            datesortie: req.body.datesortie,
            libelle: req.body.libelle,
            nombrejour: req.body.nombrejour,
            prix: req.body.prix,
            devise: req.body.devise,
            datereservation: req.body.datereservation,
            observation: req.body.observation,
            provenance: req.body.provenance
        }
    });
    res.status(200).json({Reservationchambre:reserveroom});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showReservationchambre = async (req , res) =>{
    try {
        const reserveroom = await Reservationchambre.findOne(req.body);
        const data = reserveroom;
        res.status(200).json({Reservationchambre:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.showAllReservationchambre = async (req , res) =>{
    try {
        const reserveroom = await Reservationchambre.find();
        const data = reserveroom;
        res.status(200).json({Reservationchambre:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deleteReservationchambre = async (req , res) =>{
    try {
        const reserveroom = await Reservationchambre.findByIdAndDelete(req.body);
        const data = reserveroom;
        res.status(200).json({Reservationchambre:data});
    } catch (error) {
        res.status(500).send("err");
    }
}