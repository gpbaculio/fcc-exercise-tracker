"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExerciseController_1 = require("../controllers/ExerciseController");
class ExerciseRoutes {
    constructor() {
        this.exerciseController = new ExerciseController_1.default();
    }
    routes(app) {
        app.route('/api/exercise/add').post(this.exerciseController.add);
    }
}
exports.default = ExerciseRoutes;
//# sourceMappingURL=ExerciseRoutes.js.map