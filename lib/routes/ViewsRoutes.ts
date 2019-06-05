import ViewsController from '../controllers/ViewsController';

export default class TimeStampRoutes {
  public viewsController: ViewsController = new ViewsController();
  public routes(app): void {
    app.route('/').get(this.viewsController.handleHomeView);
  }
}
