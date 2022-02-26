const Service = require("../Model/ServiceModal");

module.exports.createService = async (req, res) =>{
    try {
        const service = Service({
            designation: req.body.designation
        });
        const data = await service.save();
        res.status(200).json({Service:data});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updateService = async (req, res) =>{
    try {
        const service = await Service.findByIdAndUpdate(req.body._id, {$set:{
            designation: req.body.designation
        }
    });
    res.status(200).json({Service:service});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showService = async (req, res) =>{
    try {
        const service = await Service.findOne(req.body);
        const data = service;
        res.status(200).json({Service:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.showAllService = async (req, res) =>{
    try {
        const service = await Service.find();
        const data = service;
        res.status(200).json({Service:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deleteService = async (req, res) =>{
    try {
        const service = await Service.findByIdAndDelete(req.body);
        const data = service;
        res.status(200).json({Service:data});
    } catch (error) {
        res.status(500).send("err");
    }
}