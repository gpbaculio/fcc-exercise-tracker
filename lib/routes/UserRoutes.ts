import UserController from '../controllers/UserController';

export default class UserRoutes {
  public userController: UserController = new UserController();
  public routes(app): void {
    app.route('/api/exercise/new-user').post(this.userController.add);
    app.route('/api/exercise/log/:userId').post(this.userController.getLog);
  }
}
