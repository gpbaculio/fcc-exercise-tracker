"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WhoAmIController_1 = require("../controllers/WhoAmIController");
class WhoAmIRoutes {
    constructor() {
        this.whoAmIController = new WhoAmIController_1.default();
    }
    routes(app) {
        app.route('/api/whoami').get(this.whoAmIController.handleWhoAmI);
    }
}
exports.default = WhoAmIRoutes;
//# sourceMappingURL=WhoAmIRoute.js.map