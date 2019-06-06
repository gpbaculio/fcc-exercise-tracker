"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../controllers/UserController");
class UserRoutes {
    constructor() {
        this.userController = new UserController_1.default();
    }
    routes(app) {
        app.route('/api/exercise/new-user').post(this.userController.add);
        app.route('/api/exercise/log').get(this.userController.getLog);
    }
}
exports.default = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map