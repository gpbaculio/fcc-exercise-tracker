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
class UserController {
    constructor() {
        this.isExisting = (username) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ username });
            if (user !== null)
                return true;
            else
                false;
        });
        this.add = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username } = req.body;
            if (this.isExisting(username)) {
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
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map