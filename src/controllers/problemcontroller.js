

const{ StatusCodes }  = require('http-status-codes');


function pingCheckProblemController(req,res) {
    return res.json({message:"Problem Controller is up"});
}


function addProblem(req,res) {

    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"not implemented"});

}

function getProblem(req,res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"not implemented"});

}

function getProblems(req,res) {
return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"not implemented"});
}

function deleteProblem(req,res) {
return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"not implemented"});
}

function updateProblem(req,res) {
return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"not implemented"});
}


module.exports = {

    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingCheckProblemController

}