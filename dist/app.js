"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var cors = require('cors');
const UrlRoutes_1 = require("./routes/UrlRoutes");
const ViewsRoutes_1 = require("./routes/ViewsRoutes");
class App {
    constructor() {
        this.app = express();
        this.urlRoutes = new UrlRoutes_1.default();
        this.viewsRoutes = new ViewsRoutes_1.default();
        this.mongoSetup();
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
        this.app.use(bodyParser.json());
        this.urlRoutes.routes(this.app);
        this.viewsRoutes.routes(this.app);
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://shelajoy:shelajoy2019@ds059546.mlab.com:59546/fcc-url-shortener', {
            useNewUrlParser: true,
            useCreateIndex: true
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map