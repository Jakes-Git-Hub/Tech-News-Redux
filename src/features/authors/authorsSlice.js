"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectAuthors = exports.authorsSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("../../app/data");
var initialState = {
    authors: data_1.AUTHORS,
};
exports.authorsSlice = (0, toolkit_1.createSlice)({
    name: 'authors',
    initialState: initialState,
    reducers: {}
});
var selectAuthors = function (state) { return state.authors.authors; };
exports.selectAuthors = selectAuthors;
exports.default = exports.authorsSlice.reducer;
