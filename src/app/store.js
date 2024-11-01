"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var articlesSlice_1 = __importDefault(require("../features/articles/articlesSlice"));
var categoriesSlice_1 = __importDefault(require("../features/categories/categoriesSlice"));
var sessionSlice_1 = __importDefault(require("../features/session/sessionSlice"));
var authorsSlice_1 = __importDefault(require("../features/authors/authorsSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        articles: articlesSlice_1.default,
        categories: categoriesSlice_1.default,
        session: sessionSlice_1.default,
        authors: authorsSlice_1.default
    },
});
