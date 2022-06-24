import Controller from './Controller';
import Question from '../models/QuestionModel';
import QuestionService from '../services/QuestionService';

const questionService = new QuestionService(new Question().getInstance());

class QuestionController extends Controller {
    constructor(service) {
        super(service);
    }

}

export default new QuestionController(questionService);


