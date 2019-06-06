import * as express from 'express';
import * as mongoose from 'mongoose';
const bodyParser = require('body-parser');
var cors = require('cors');

import UserRoutes from './routes/UserRoutes';
import ExerciseRoutes from './routes/ExerciseRoutes';
import ViewsRoutes from './routes/ViewsRoutes';

class App {
  public app: express.Application = express();
  public userRoutes: UserRoutes = new UserRoutes();
  public exerciseRoutes: ExerciseRoutes = new ExerciseRoutes();
  public viewsRoutes: ViewsRoutes = new ViewsRoutes();

  private mongoSetup(): void {
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(
      'mongodb://shelajoy:shelajoy2019@ds233737.mlab.com:33737/fcc-exercise-tracker',
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
    this.userRoutes.routes(this.app);
    this.exerciseRoutes.routes(this.app);
    this.viewsRoutes.routes(this.app);
  }
}

export default new App().app;
