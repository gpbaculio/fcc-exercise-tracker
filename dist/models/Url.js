"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UrlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: Number
}, {
    timestamps: true,
    versionKey: false
});
exports.default = mongoose.model('Url', UrlSchema);
//# sourceMappingURL=Url.js.map