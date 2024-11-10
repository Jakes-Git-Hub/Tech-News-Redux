"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Article;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var articlesSlice_1 = require("../features/articles/articlesSlice");
var react_router_dom_1 = require("react-router-dom");
var react_markdown_1 = __importDefault(require("react-markdown"));
function Article() {
    var articles = (0, react_redux_1.useSelector)(articlesSlice_1.selectArticles);
    var title = (0, react_router_dom_1.useParams)().title;
    var article = title ? articles[title] : undefined;
    return article ? (react_1.default.createElement("div", { className: "article-container" },
        react_1.default.createElement("h1", { className: "article-title" }, article.title),
        react_1.default.createElement("p", null,
            "By ",
            react_1.default.createElement(react_router_dom_1.Link, { to: "/authors/".concat(article.author) }, article.author)),
        react_1.default.createElement(react_markdown_1.default, null, article.body))) : (react_1.default.createElement("p", null, "No article found with that title..."));
}
