

const NotImplemented = require('../errors/notImplemented.error');

const {ProblemService} = require('../services');

const {ProblemRepository} = require('../repositories');
const { StatusCodes } = require('http-status-codes');


const problemService = new ProblemService(new ProblemRepository());


function pingCheckProblemController(req, res) {
    return res.json({ message: "Problem Controller is up" });
}


 async function addProblem(req, res, next) {

    try {

        console.log("incoming req body",req.body);
        const newproblem =  await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json( {
            success:true,
            message:'Successfully created a new problem',
            error: {},
            data:newproblem
        })
    } catch (error) {
        next(error); // will call error middleware
    }

}

function getProblem(req, res, next) {
    try {
        throw new NotImplemented('getProblem');
    } catch (error) {
        next(error);
    }

}

function getProblems(req, res, next) {
    try {
        throw new NotImplemented('getProblems');
    } catch (error) {
        next(error);
    }

}

function deleteProblem(req, res, next) {
    try {
        throw new NotImplemented('deleteProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        throw new NotImplemented('updateProblem');
    } catch (error) {
        next(error);
    }
}


module.exports = {

    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingCheckProblemController

}