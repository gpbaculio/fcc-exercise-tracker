import UrlController from '../controllers/UrlController';

export default class UrlRoutes {
  public urlController: UrlController = new UrlController();
  public routes(app): void {
    app.route('/api/shorturl/new').post(this.urlController.newUrl);
    app
      .route('/api/shorturl/:shortUrlNum')
      .get(this.urlController.handleRedirect);
  }
}
