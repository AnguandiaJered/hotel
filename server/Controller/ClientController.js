const Client = require("../Model/ClientModel");

module.exports.createClient = async (req , res) => {
    try {
        const client = Client({
            noms: req.body.noms,
            sexe: req.body.sexe,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            datenaissance: req.datenaissance,
            profession: req.body.profession,
            photo: req.body.photo
        });
        const data = await client.save();
        res.status(200).json({Client:data});
    } catch (error) {
        res.status(200).json("err");
    }
}

module.exports.updateClient = async (req , res) =>{
    try {
        const client = await Client.findByIdAndUpdate(req.body._id, {$set:{
            noms: req.body.noms,
            sexe: req.body.sexe,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            datenaissance: req.datenaissance,
            profession: req.body.profession,
            photo: req.body.photo
        }
    });
    res.status(200).json({Client:client});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showClient = async (req, res) =>{
    try {
        const client = await Client.findOne(req.body);
        const data = client;
        res.status(200).json({Client:data});
    } catch (error) {
        res.status(200).send("err");
    }
}
module.exports.showAllClient = async (req, res) =>{
    try {
        const client = await Client.find();
        const data = client;
        res.status(200).json({Client:data});
    } catch (error) {
        res.status(200).send("err");
    }
}

module.exports.deleteClient = async (req, res) =>{
    try {
        const client = await Client.findByIdAndDelete(req.body);
        const data = client;
        res.status(200).json({Client:data});
    } catch (error) {
        res.status(200).send("err");
    }
}