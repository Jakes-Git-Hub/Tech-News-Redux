"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCategories = exports.categoriesSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("../../app/data");
var initialState = {
    categories: data_1.CATEGORIES,
};
exports.categoriesSlice = (0, toolkit_1.createSlice)({
    name: 'categories',
    initialState: initialState,
    reducers: {}
});
var selectCategories = function (state) { return state.categories.categories; };
exports.selectCategories = selectCategories;
exports.default = exports.categoriesSlice.reducer;
