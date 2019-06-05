"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ViewsController_1 = require("../controllers/ViewsController");
class TimeStampRoutes {
    constructor() {
        this.viewsController = new ViewsController_1.default();
    }
    routes(app) {
        app.route('/').get(this.viewsController.handleHomeView);
    }
}
exports.default = TimeStampRoutes;
//# sourceMappingURL=ViewsRoutes.js.map