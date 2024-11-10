"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var authorsSlice_1 = require("../features/authors/authorsSlice");
// Component
var Author = function () {
    var name = (0, react_router_dom_1.useParams)().name;
    var authors = (0, react_redux_1.useSelector)(function (state) { return (0, authorsSlice_1.selectAuthors)(state); });
    var author = name ? authors[name] : undefined;
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("h1", null,
            "Articles by ",
            name),
        react_1.default.createElement("ul", null, author && author.articles ? (author.articles.map(function (slug) { return (react_1.default.createElement("li", { key: slug },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/articles/".concat(slug) }, slug))); })) : (react_1.default.createElement("p", null, "No Articles Found...")))));
};
exports.default = Author;
