"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var cors = require('cors');
const UserRoutes_1 = require("./routes/UserRoutes");
const ExerciseRoutes_1 = require("./routes/ExerciseRoutes");
const ViewsRoutes_1 = require("./routes/ViewsRoutes");
class App {
    constructor() {
        this.app = express();
        this.userRoutes = new UserRoutes_1.default();
        this.exerciseRoutes = new ExerciseRoutes_1.default();
        this.viewsRoutes = new ViewsRoutes_1.default();
        this.mongoSetup();
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
        this.app.use(bodyParser.json());
        this.userRoutes.routes(this.app);
        this.exerciseRoutes.routes(this.app);
        this.viewsRoutes.routes(this.app);
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://shelajoy:shelajoy2019@ds233737.mlab.com:33737/fcc-exercise-tracker', {
            useNewUrlParser: true,
            useCreateIndex: true
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map