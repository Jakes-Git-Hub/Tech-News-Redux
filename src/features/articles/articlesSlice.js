"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterArticles = exports.selectArticles = exports.articlesSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("../../app/data");
var initialState = {
    articles: data_1.ARTICLES,
};
exports.articlesSlice = (0, toolkit_1.createSlice)({
    name: 'articles',
    initialState: initialState,
    reducers: {}
});
var selectArticles = function (state) { return state.articles.articles; };
exports.selectArticles = selectArticles;
var filterArticles = function (query, articles) {
    return Object.values(articles).filter(function (article) { return article.title.toLowerCase().includes(query.toLowerCase()); });
};
exports.filterArticles = filterArticles;
exports.default = exports.articlesSlice.reducer;
