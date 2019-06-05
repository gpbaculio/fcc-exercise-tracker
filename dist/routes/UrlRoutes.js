"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrlController_1 = require("../controllers/UrlController");
class UrlRoutes {
    constructor() {
        this.urlController = new UrlController_1.default();
    }
    routes(app) {
        app.route('/api/shorturl/new').post(this.urlController.newUrl);
        app
            .route('/api/shorturl/:shortUrlNum')
            .get(this.urlController.handleRedirect);
    }
}
exports.default = UrlRoutes;
//# sourceMappingURL=UrlRoutes.js.map