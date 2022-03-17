const User = require("../Model/UserModel");


module.exports.createUser = async (req , res) => {
    try {
        const user = User({
            noms: req.body.noms,
            username: req.body.username,
            password: req.body.password,
            mail: req.body.mail,
            role: req.body.role
        });
        const data = await user.save();
        res.status(200).json({User:data});

    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.updateUser = async (req , res) => {
    try {
        const user = await  User.findByIdAndUpdate(req.params.id, { $set:{
            _id:id,
            noms: req.body.noms,
            username: req.body.username,
            password: req.body.password,
            mail: req.body.mail,
            role: req.body.role
            }
        });
        res.status(200).json({User:user});
    } catch (error) {
        res.status(500).json("err");
    }
}

module.exports.showUser = async (req , res) => {
    try {
        const user = await User.findOne(req.params.id);
        const data = user;
        res.status(200).json({User:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.deleteUser = async (req , res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        const data = user;
        res.status(200).json({User:data});
    } catch (error) {
        res.status(500).send("err");
    }
}

module.exports.showallUser = async (req , res) => {
    try {
        const user = await User.find();
        const data = user;
        res.status(200).json({User:data});
    } catch (error) {
        res.status(500).send("err");
    }
}