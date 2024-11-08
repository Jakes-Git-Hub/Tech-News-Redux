"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Articles;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var articlesSlice_1 = require("../features/articles/articlesSlice");
var Search_1 = __importDefault(require("./Search"));
var react_router_dom_1 = require("react-router-dom");
function Articles() {
    var articles = (0, react_redux_1.useSelector)(articlesSlice_1.selectArticles);
    var _a = (0, react_router_dom_1.useSearchParams)(), searchParams = _a[0], setSearchParams = _a[1];
    var title = searchParams.get('title');
    var filteredArticles = title ? (0, articlesSlice_1.filterArticles)(title, articles) : Object.values(articles);
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("h1", null, "Articles"),
        react_1.default.createElement("ul", null, filteredArticles.map(function (article) { return (react_1.default.createElement("li", { key: article.slug },
            react_1.default.createElement(react_router_dom_1.Link, { to: "".concat(article.slug) }, article.title))); })),
        react_1.default.createElement(Search_1.default, null)));
}
