const {model} = require("mongoose");
const User = model("User");

module.exports.getUserList = (req, res) => {
    let offset = parseInt(req.params.offset);
    let count = parseInt(req.params.count);
    User.find().skip(offset).limit(count).exec((err, userList) => {
        if (err)
            res.status(500).send({message: "Internal server error"});
        else
            res.status(200).send(userList);
    });
}

module.exports.getUserById = (req, res) => {
    User.findById(req.params._id, (err, user) => {
        if (err)
            res.status(500).json({message: "Internal server error"});
        else if (!user)
            res.status(404).json({message: "User not found"})
        else
            res.status(200).json(user);
    })
}

module.exports.createUser = (req, res) => {
    User.create(req.body, (err, user) => {
        if (err)
            res.status(500).json({message: "Internal server error"})
        res.status(201).json(user);
    })
}

module.exports.deleteUserById = (req, res) => {
    User.findByIdAndDelete(req.params._id, {useFindAndModify: true}, (err, user) => {
        if (err)
            res.status(500).json({message: "Internal server error"})
        else if (!user)
            res.status(404).json({message: "User not found"})
        else
            res.status(204).send();
    })
}

module.exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params._id, {...req.body, updatedOn: Date.now()}, {new: true}, (err, user) => {
        if (err)
            res.status(500).json({message: "Internal server error"})
        else if (!user)
            res.status(404).send({message: "User not found"})
        else
            res.status(200).json(user);
    })
}

