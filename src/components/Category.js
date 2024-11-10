"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Category;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var categoriesSlice_1 = require("../features/categories/categoriesSlice");
var articlesSlice_1 = require("../features/articles/articlesSlice");
var react_router_dom_1 = require("react-router-dom");
function Category() {
    var _a;
    var categories = (0, react_redux_1.useSelector)(categoriesSlice_1.selectCategories);
    var articles = (0, react_redux_1.useSelector)(articlesSlice_1.selectArticles);
    var name = (0, react_router_dom_1.useParams)().name;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null,
            "Articles Related to ",
            name),
        react_1.default.createElement("ul", null, name && ((_a = categories[name]) === null || _a === void 0 ? void 0 : _a.map(function (articleSlug) {
            var _a;
            return (react_1.default.createElement("li", { key: articleSlug },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/articles/".concat(articleSlug) }, (_a = articles[articleSlug]) === null || _a === void 0 ? void 0 : _a.title)));
        })))));
}
