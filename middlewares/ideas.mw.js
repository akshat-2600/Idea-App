exports.validate_POST_req_body = (req, res, next) => {

    const req_obj = req.body;


    //Validate if the idea_name field is present
    if(!req_obj["idea_name"]) {
        return res.status(400).send({ //400 -> Bad request
            message : `Bad request , "id" field in body ${req_obj["id"]} doesn't match with id in param ${req.params.id}`
        })
    }

    //Validate for the author_name field is present
    if(!req_obj["author_name"]) {
        return res.status(400).send({ //400 -> Bad request
            message : `Bad request body, "author_name" field not passed or is empty`
        })
    }

    //Validate if the idea_description field is present
    if(!req_obj["idea_description"]) {
        return res.status(400).send({ //400 -> Bad request
            message : `Bad request body, "idea_description" field not passed or is empty`
        })
    }

    next();

}




exports.validate_PUT_req_body = (req, res, next) => {

    const req_obj = req.body;

    //Validate if the id field is present
    if(!req_obj["id"]) {
        return res.status(400).send({ //400 -> Bad request
            message : `Bad request body, "id" field not passed or is empty`
        })
    }

    //Validate if the id in param and id in body matches
    if(req_obj["id"] != req.params.id) {
        return res.status(400).send({ //400 -> Bad request
            message : `Bad request body, "id" field not passed or is empty`
        })
    }


    //Validate if the idea_name field is present
    if(!req_obj["idea_name"]) {
        return res.status(400).send({ //400 -> Bad request
            message : `Bad request , "id" field in body ${req_obj["id"]} doesn't match with id in param ${req.params.id}`
        })
    }

    //Validate for the author_name field is present
    if(!req_obj["author_name"]) {
        return res.status(400).send({ //400 -> Bad request
            message : `Bad request body, "author_name" field not passed or is empty`
        })
    }

    //Validate if the idea_description field is present
    if(!req_obj["idea_description"]) {
        return res.status(400).send({ //400 -> Bad request
            message : `Bad request body, "idea_description" field not passed or is empty`
        })
    }

    next();

}

