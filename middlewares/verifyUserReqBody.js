const userModel = require("../models/user.models");

const verifyuserReqBody = async (req, res, next) => {
    // Verification for username
    if (!req.body.name) {
        return res.status(400).send({
            message: "Failed! Username is not provided"
        });
    }

    // Validate user id
    if (!req.body.userId) {
        return res.status(400).send({
            message: "Failed! UserId is not provided"
        });
    }
    
    // CHECK FOR THE DUPLICATE USER ID
    try {
        const user = await userModel.findOne({ userId: req.body.userId });
        if (user) {
            return res.status(400).send({
                message: "Failed! User id already exists"
            });
        }

        // Email validation
        if (!req.body.email) {
            return res.status(400).send({
                message: "Failed! Email is not provided"
            });
        }

        // Check for duplicate email
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send({
                message: "Failed! Email id already exists"
            });
        }

        next();
    } catch (error) {
        console.error("Error in verifyuserReqBody middleware:", error);
        return res.status(500).send({
            message: "Internal server error during validation"
        });
    }
}

module.exports = {
    verifyuserReqBody: verifyuserReqBody
}
