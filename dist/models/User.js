"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        unique: true
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.default = mongoose.model('User', UserSchema);
//# sourceMappingURL=User.js.map