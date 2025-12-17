const express = require("express");
const route = express.Router();
const authController = require("../controllers/auth.controller");
const verify_user_mw = require("../middlewares/verifyUserReqBody");


route.post("/auth/signup", verify_user_mw.verifyuserReqBody, authController.signup);

route.post("/auth/signin", authController.signin);

module.exports = route;