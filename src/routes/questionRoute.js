import UserController from '../controllers/QuestionController';
import auth from '../middleware/auth.middleware';

export default (router) => {
    router.post(`/api/question`, auth, UserController.insert);
    router.get(`/api/question`, UserController.getAll);
    router.get(`/api/question/:id`, UserController.get);
    router.put(`/api/question/:id`, auth, UserController.update);
    router.delete(`/api/question/:id`, auth, UserController.delete);
};
