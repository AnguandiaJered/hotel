const Classeroom = require("../Model/ClasseroomModel");

module.exports.createClassroom = async (req, res) =>{
    try {
        const classroom = Classeroom({
            designation: req.body.designation,
            montant: req.body.montant,
            devise: req.body.devise
        });
        const data = await classroom.save();
        res.status(200).json({Classeroom:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updateClassroom = async (req , res) => {
    try {
        const classroom = await Classeroom.findByIdAndUpdate(req.body._id, {$set: {
            designation: req.body.designation,
            montant: req.body.montant,
            devise: req.body.devise
        }
    });
    res.status(200).json({Classeroom:classroom});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showClassroom = async (req, res) =>{
    try {
        const classroom = await Classeroom.findOne(req.body);
        const data = classroom;
        res.status(200).json({Classeroom:data});
    } catch (error) {
        res.status(500).send("err");
    }
}
module.exports.showAllClassroom = async (req, res) =>{
    try {
        const classroom = await Classeroom.find();
        const data = classroom;
        res.status(200).json({Classeroom:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deleteClassroom = async (req, res) =>{
    try {
        const classroom = await Classeroom.findByIdAndDelete(req.body);
        const data = classroom;
        res.status(200).json({Classeroom:data});
    } catch (error) {
        res.status(500).send("err");
    }
}