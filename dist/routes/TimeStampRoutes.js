"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeStampController_1 = require("../controllers/TimeStampController");
class TimeStampRoutes {
    constructor() {
        this.timeStampController = new TimeStampController_1.default();
    }
    routes(app) {
        app
            .route('/api/timestamp/:date_string?')
            .get(this.timeStampController.convertDate);
    }
}
exports.default = TimeStampRoutes;
//# sourceMappingURL=TimeStampRoutes.js.map