

const mongoose = require('mongoose');


const problemsSchema =  new mongoose.Schema( {
    title: {
        type: String,
        required:[true,'Title cannot be empty']

    },
    description: {
       type: String,
       required: [true,'Description cannot be empty']
    },
    difficulty: {

        type:String,
        enum:['easy','medium','hard'],
        required:[true,'Problem difficulty cannot be empty'],
        default:'easy',


    },
    testCases: [
        {
            input:{
                type:String,
                required:true
            },
            output: {
                type:String,
                required:true
            }
        }
    ],

    Editorial: {
        type:String,
    }
});

const Problem = mongoose.model("Problem",problemsSchema);

module.exports = Problem;