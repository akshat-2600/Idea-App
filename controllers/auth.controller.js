const userModel = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../configs/auth.config");

/**
 * logic for the registration or sign up
 */
exports.signup = async (req, res) => {
    /**
     * create the user object to be stored
     */
    // basic validation for password length
    if (!req.body.password || req.body.password.length < 8) {
        return res.status(400).send({ message: "Password must be at least 8 characters long" });
    }

    const userObj = {
        name: req.body.name,
        userId : req.body.userId,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 8)
    }

    try {
        const userCreated = await userModel.create(userObj);
        const postResponse = {
            name : userCreated.name,
            userId : userCreated.userId,
            email : userCreated.email,
            createdAt : userCreated.createdAt,
            updatedAt : userCreated.updatedAt,
            message : "Registration Successful !"
        };
        res.status(201).send(postResponse);

    } catch (err) {
        console.log("Some error while saving the user in the DB", err.message);
        res.status(500).send({
            message: "Some internal error while inserting the element"
        })
    }
}

/**
 * Logic for the sign in
 */

exports.signin = async (req, res) => {
    //Check if the user exists
    const user = await userModel.findOne({
        userId : req.body.userId
    });
    console.log(user);
    if(user==null) {
        res.status(400).send({
            message: "Failed ! User id does not exist"
        });
        return;
    }
    //If the password matches
    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    console.log(passwordIsValid);

    if(!passwordIsValid) {
        res.status(400).send({
            message: "Failed ! Password is not matching ...."
        });
        return;
    }

    //Return the JWT token generated as response
    const token = jwt.sign({
        id:user.userId
    }, config.secret, {
        expiresIn : 60
    });
    res.status(200).send({
        name: user.name,
        userId :user.userId,
        email : user.email,
        accessToken : token
    });
}