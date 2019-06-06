"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise_1 = require("../models/Exercise");
const User_1 = require("models/User");
class ExerciseController {
    constructor() {
        this.add = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { description, duration, date, userId } = req.body;
            const user = yield User_1.default.findOne({ userId });
            if (user === null)
                return res.json('User Id does not exist');
            const exercise = yield new Exercise_1.default({ description, duration, date });
            exercise.date instanceof Date;
            exercise
                .save()
                .then(({ description, duration, date }) => {
                res.json({
                    username: user.username,
                    description,
                    duration,
                    _id: user._id,
                    date
                });
            })
                .catch(error => res.status(400).json({ error }));
        });
    }
}
exports.default = ExerciseController;
//# sourceMappingURL=ExerciseController.js.map