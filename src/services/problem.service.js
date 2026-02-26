const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository; // we are using it like this to avoid tight coupling b/w Service layer and Repo (DB query) layer
    }


    async createProblem(problemData) {

        try {

            // sanitize markdown for description

            problemData.description = sanitizeMarkdownContent(problemData.description);

            console.log("Problem Data--",problemData);

            const problem =  await this.problemRepository.createProblem(problemData);

            console.log("Problem created",problem);

            return problem;

        } catch (error) {

            console.log(error);

            throw error;

        }

    }

}

module.exports = ProblemService;