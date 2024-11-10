"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUser = exports.logOut = exports.signUp = exports.selectIsLoggedIn = exports.selectCurrentUser = exports.sessionSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    user: {},
    isLoggedIn: false,
};
exports.sessionSlice = (0, toolkit_1.createSlice)({
    name: 'session',
    initialState: initialState,
    reducers: {
        signUp: function (state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        editUser: function (state, action) {
            state.user = action.payload;
        },
        logOut: function (state) {
            state.user = {};
            state.isLoggedIn = false;
        },
    },
});
var selectCurrentUser = function (state) { return state.session.user; };
exports.selectCurrentUser = selectCurrentUser;
var selectIsLoggedIn = function (state) { return state.session.isLoggedIn; };
exports.selectIsLoggedIn = selectIsLoggedIn;
exports.signUp = exports.sessionSlice.actions.signUp;
exports.logOut = exports.sessionSlice.actions.logOut;
exports.editUser = exports.sessionSlice.actions.editUser;
exports.default = exports.sessionSlice.reducer;