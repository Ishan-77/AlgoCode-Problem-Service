const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository; // we are using it like this to avoid tight coupling b/w Service layer and Repo (DB query) layer
    }


    async createProblem(problemData) {

        try {

            // sanitize markdown for description

            problemData.description = sanitizeMarkdownContent(problemData.description);


            const problem =  await this.problemRepository.createProblem(problemData);


            return problem;

        } catch (error) {

            console.log(error);

            throw error;

        }

    }

    async getAllProblems() {

        try {

            const allproblems = await this.problemRepository.getAllProblems();

            return allproblems;

        } catch(error) {

             console.log(error);

            throw error;

        }

    }

    async getProblem(id) {
        try {

            const problem = await this.problemRepository.getProblem(id);
            return problem;

        }catch(error) {

              console.log(error);

            throw error;

        }
    }

}

module.exports = ProblemService;