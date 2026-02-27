

const logger = require('../config/logger.config');
const NotFoundError = require('../errors/notfound.error');
const { Problem } = require('../models')
class ProblemRepository {

    async createProblem(problemData) {
        try {

            //throw new {"err":"some-error"};

            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData?.testCases) ? problemData.testCases : [],



            });

            return problem;

        } catch (error) {
            console.log("Error", error);
            throw error;
        }
    }

    async getAllProblems() {
        try {

            const allproblems = await Problem.find({});

            return allproblems;

        } catch (error) {
            console.log("Error", error);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);

            if (!problem) throw new NotFoundError(id);

            return problem;

        } catch (error) {
            console.log("Error", error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {

            const deletedProblem = await Problem.findByIdAndDelete(id);

            if (!deletedProblem) {
                logger.error(` Problem.Repository: Problem with Problem ID: ${id} does not exist in the DB`);
                throw new NotFoundError(id);
            }

            return deletedProblem;

        } catch (error) {
            console.log("Error", error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;
