import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class QuestionModel {
    // eslint-disable-next-line class-methods-use-this
    initSchema() {
        const schema = new Schema(
            {
                category: {
                    //Array of strings
                    type: [String],
                    required: [true, 'Please add catetory'],
                    enum: [
                        'Economics',
                        'History',
                        'Business',
                        'Computer',
                        'Maths',
                        'Other'
                    ]
                },
                difficult: {
                    //Array of strings
                    type: [String],
                    required: [true, 'Please add a minimum difficlty'],
                    enum: [
                        'Easy',
                        'Medium',
                        'Hard'
                    ],
                },
                type: {
                    type: String,
                    enum: ['Multiple choice', 'True/False'],
                    default: 'Multiple choice'
                },
                question: {
                    type: String,
                    required: [true, 'Please add a Question']
                },
                incorrect_answer: [{
                    type: String
                }],
                correct_answer: {
                    type: String,
                    required: [true, 'Please add a correct_answer']
                }
            },
            {
                timestamps: true,
            },
        );
        schema.plugin(uniqueValidator);
        mongoose.model('questions', schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('questions');
    }

    // eslint-disable-next-line class-methods-use-this
    getModel() {
        return mongoose.model('questions');
    }
}

export default QuestionModel;
