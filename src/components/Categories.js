"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Categories;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var categoriesSlice_1 = require("../features/categories/categoriesSlice");
var react_router_dom_1 = require("react-router-dom");
function Categories() {
    var categories = (0, react_redux_1.useSelector)(categoriesSlice_1.selectCategories);
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("h1", null, "Categories"),
        react_1.default.createElement("ul", null, Object.keys(categories).map(function (slug) { return (react_1.default.createElement("li", { key: slug },
            react_1.default.createElement(react_router_dom_1.Link, { to: "".concat(slug) }, slug))); })),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
}
