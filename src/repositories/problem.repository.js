

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

}

module.exports = ProblemRepository;
