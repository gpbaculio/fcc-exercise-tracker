import * as express from 'express';
import * as mongoose from 'mongoose';
const bodyParser = require('body-parser');
var cors = require('cors');

import UrlRoutes from './routes/UrlRoutes';
import ViewsRoutes from './routes/ViewsRoutes';

class App {
  public app: express.Application = express();
  public urlRoutes: UrlRoutes = new UrlRoutes();
  public viewsRoutes: ViewsRoutes = new ViewsRoutes();

  private mongoSetup(): void {
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(
      'mongodb://shelajoy:shelajoy2019@ds059546.mlab.com:59546/fcc-url-shortener',
      {
        useNewUrlParser: true,
        useCreateIndex: true
      }
    );
  }
  constructor() {
    this.mongoSetup();
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
    this.app.use(bodyParser.json());
    this.urlRoutes.routes(this.app);
    this.viewsRoutes.routes(this.app);
  }
}

export default new App().app;
