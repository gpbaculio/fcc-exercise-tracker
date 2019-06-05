"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WhoAmIController {
    constructor() {
        this.handleWhoAmI = (req, res) => {
            const ipaddress = req.ip;
            const languages = req.headers['accept-language'];
            const software = req.headers['user-agent'];
            res.json({ ipaddress, languages, software });
        };
    }
}
exports.default = WhoAmIController;
//# sourceMappingURL=WhoAmIController.js.map