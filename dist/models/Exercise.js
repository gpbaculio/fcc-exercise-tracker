"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ExerciseSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.default = mongoose.model('Exercise', ExerciseSchema);
//# sourceMappingURL=Exercise.js.map