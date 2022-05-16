"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
    },
    parent: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        default: null,
    },
});
exports.default = (0, mongoose_1.model)("Category", CategorySchema);
