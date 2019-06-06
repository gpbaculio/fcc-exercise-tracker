import ExerciseController from '../controllers/ExerciseController';

export default class ExerciseRoutes {
  public exerciseController: ExerciseController = new ExerciseController();
  public routes(app): void {
    app.route('/api/exercise/add').post(this.exerciseController.add);
  }
}
