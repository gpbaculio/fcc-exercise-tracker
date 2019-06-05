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
class TimeStampController {
    constructor() {
        this.convertDate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { date_string } = req.params;
            let date = new Date(Number(date_string));
            if (typeof date_string !== 'undefined' && date_string.includes('-')) {
                date = new Date(date_string);
            }
            if (typeof date_string === 'undefined') {
                date = new Date(Date.now());
                res.json({ unix: date.getTime(), utc: date.toUTCString() });
            }
            else if (date_string && isNaN(date.getTime())) {
                res.json({ error: 'invalid Date' });
            }
            else {
                res.json({ unix: date.getTime(), utc: date.toUTCString() });
            }
        });
    }
}
exports.default = TimeStampController;
//# sourceMappingURL=TimeStampController.js.map