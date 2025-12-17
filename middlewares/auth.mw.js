const config = require("../configs/auth.config")
const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    //Verification

    //Fetch the access token from the header
    const token = req.header("x-access-token");

    if(!token) {
        return res.status(403).send({ //forbidden
            message: "No token is provided"
        });
    }

    /**
     * Check the token is still valid
     */
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            res.status(401).send({  //Not allowed
                message: "UnAuthorized"
            });
        }
        next();
    });
}

module.exports = {
    verifyToken: verifyToken
}