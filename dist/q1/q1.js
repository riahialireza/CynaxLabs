"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Q1. We have an online store with items organized in categories, sub-categories, and
sub-sub-categories up to N levels. Draw the database structure for the online store
with the category tree to store things. Each category has a name. The number and
level of categories can go up to infinite.
Write a query to fetch all the first-level children (categories+items) for a category.
Write a query to fetch all the children (categories+items) at all category levels for a
category.
*/
const category_model_1 = require("./category.model");
class CategoriesService {
    constructor(name, parent) {
        this.name = name;
        this.parent = parent;
        this.name = name;
        this.parent = parent;
    }
    static createTree() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < 3; i++) {
                const rootCat = yield new category_model_1.default(`Category ${i}`, null).save();
                for (let j = 0; j < 3; j++) {
                    const level1Cat = yield new category_model_1.default(`Category ${i}-${j}`, rootCat._id).save();
                    for (let k = 0; k < 3; k++) {
                        yield new category_model_1.default(`Category ${i}-${j}-${k}`, level1Cat._id).save();
                    }
                }
            }
        });
    }
    static getFirstLevelChildren() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield category_model_1.default.find({
                parent: null,
            });
            return categories;
        });
    }
    static getAllChildrenOfCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield category_model_1.default.findById(categoryId);
            console.log(category.left, category.right);
            const categories = yield category_model_1.default.find({
                left: category.left,
                right: category.right,
            });
            return categories;
        });
    }
}
exports.default = CategoriesService;
