const express = require("express");
const route = express.Router();
const idea_controller = require("../controllers/ideas.controller");
const idea_mw =require("../middlewares/ideas.mw")
const auth_mw = require("../middlewares/auth.mw");
/**
 * Start define the routes
 */



/**
 * Route for fetch all ideas - 127.0.0.1:7070/ideas_app/v1/ideas
 */
route.get("/ideas", [auth_mw.verifyToken], idea_controller.getAllIdeas);

/**
 * Route for fetching idea based on id
 */

route.get("/ideas/:id", idea_controller.getIdeaBasedOnId);



/**
 * Route for creating a new idea
 */

route.post("/ideas", idea_mw.validate_POST_req_body, idea_controller.createIdea);


/**
 * Route for updating the exisiting idea
 */

route.put("/ideas/:id", idea_mw.validate_PUT_req_body, idea_controller.updateIdea);

/**
 * Route for deleting idea
 */
route.delete("/ideas/:id", idea_controller.deleteIdea);




module.exports = route;

