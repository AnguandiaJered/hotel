const Reservationsalle = require("../Model/ReservationsalleModel");

module.exports.createReservationsalle = async (req , res) =>{
    try {
        const reservesalle = Reservationsalle({
            refclient: req.body.refclient,
            datereservation: req.body.datereservation,
            refsalle: req.body.refsalle,
            libelle: req.body.libelle,
            dateceremonie: req.body.dateceremonie
        });
        const data = await reservesalle.save();
        res.status(200).json({Reservationsalle:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updateReservationsalle = async (req , res) =>{
    try {
        const reservesalle = await Reservationsalle.findByIdAndUpdate(req.body._id, {$set:{
            refclient: req.body.refclient,
            datereservation: req.body.datereservation,
            refsalle: req.body.refsalle,
            libelle: req.body.libelle,
            dateceremonie: req.body.dateceremonie 
        }
    });
    res.status(200).json({Reservationsalle:reservesalle});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showReservationsalle = async (req , res) => {
    try {
        const reservesalle = await Reservationsalle.findOne(req.body);
        const data = reservesalle;
        res.status(200).json({Reservationsalle:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.showAllReservationsalle = async (req , res) => {
    try {
        const reservesalle = await Reservationsalle.find();
        const data = reservesalle;
        res.status(200).json({Reservationsalle:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deleteReservationsalle = async (req , res) => {
    try {
        const reservesalle = await Reservationsalle.findByIdAndDelete(req.body);
        const data = reservesalle;
        res.status(200).json({Reservationsalle:data});
    } catch (error) {
        res.status(500).send("err");
    }
}