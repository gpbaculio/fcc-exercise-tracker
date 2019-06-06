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
const User_1 = require("../models/User");
const Exercise_1 = require("../models/Exercise");
class UserController {
    constructor() {
        this.isExisting = (key, val) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ [key]: val });
            if (user !== null)
                return true;
            else
                return false;
        });
        this.add = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username } = req.body;
            const isExisting = yield this.isExisting('username', username);
            if (isExisting) {
                res.json('Username already taken.');
            }
            else {
                const user = yield new User_1.default({
                    username
                });
                user
                    .save()
                    .then(({ _id, username }) => {
                    res.json({ _id, username });
                })
                    .catch(error => res.json({ error }));
            }
        });
        this.getLog = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { userId, from, to, limit } = req.query;
            if (!userId)
                return res.json('No UserId provided');
            const isExisting = yield this.isExisting('_id', userId);
            if (isExisting) {
                if (!from && to)
                    return res.json('Please provide starting date');
                const query = { userId };
                if (from)
                    query.date = { $gte: new Date(from) };
                if (to)
                    query.date = Object.assign({}, query.date, { $lte: new Date(to) });
                if (limit)
                    query.limit = limit;
                yield Exercise_1.default.find(query)
                    .then(exercises => res.json(exercises))
                    .catch(error => res.json({ error }));
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map