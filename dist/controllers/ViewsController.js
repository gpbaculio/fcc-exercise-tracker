"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
class ViewsController {
    constructor() {
        this.handleHomeView = (req, res) => {
            res.sendFile(path.resolve(__dirname + '../../../views/index.html'));
        };
    }
}
exports.default = ViewsController;
//# sourceMappingURL=ViewsController.js.map