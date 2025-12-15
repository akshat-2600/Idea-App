const ideas = require("../models/ideas.model");

let id = 3; // initial last id number of the idea stored

/**
 * Controller to fetch all the ideas present in the system
 */

exports.getAllIdeas = (req,res) => {
    // I will have to read the idea from the ideas model file
    res.status(200).send(ideas);
}

/**
 * Controller to fetch the idea based on id present in the system
 */

exports.getIdeaBasedOnId = (req, res) => {
    const idea_id = req.params.id;

    if(ideas[idea_id]) {
        res.status(200).send(ideas[idea_id]);
    } else {
        console.log(`Idea with the id : ${idea_id} is not present`);
        res.status(404).send({
            message: `Idea with the id : ${idea_id} is not present`
        });
    }
}

/**
 * Create user Controller
 */

exports.createIdea = (req, res) => {
    id++;
    //read the request body
    idea_object = req.body;
    console.log(idea_object);
    idea_object["id"] = id;
    ideas[id] = idea_object;

    //Read the response
    res.status(201).send(idea_object);
}


/**
 * Controller to update idea
 */

exports.updateIdea = (req, res) => {
    //Read the idea id
    const idea_id= req.params.id;

    //Check if the idea exists or not
    if (ideas[idea_id]) {
        const idea_obj = req.body;
        ideas[idea_id] = idea_obj;
        res.status(200).send(idea_obj);
    } else {
        res.status(404).send({
            message : `Idea doesn't exist for the given requested id ${idea_id}`
        });
    }
}

/**
 * Controller to delete the idea
 */
exports.deleteIdea = (req, res) => {
    //Fetch the idea id
    const idea_id = req.params.id;
    if (ideas[idea_id]) {
        delete ideas[idea_id];
        res.status(200).send({
            message: `Idea with the id : 4{idea_id} is deleted`
        })
    } else {
        res.status(404).send({
            message : `Idea doesn't exist for the given requested id ${idea_id}`
        })
    }
}


