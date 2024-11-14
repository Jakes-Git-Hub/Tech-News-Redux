"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectIsLoggedIn = exports.selectCurrentUser = exports.logOut = exports.editUser = exports.signUp = exports.sessionSlice = void 0;
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
exports.signUp = exports.sessionSlice.actions.signUp;
exports.editUser = exports.sessionSlice.actions.editUser;
exports.logOut = exports.sessionSlice.actions.logOut;
var selectCurrentUser = function (state) { return state.session.user; };
exports.selectCurrentUser = selectCurrentUser;
var selectIsLoggedIn = function (state) { return state.session.isLoggedIn; };
exports.selectIsLoggedIn = selectIsLoggedIn;
exports.default = exports.sessionSlice.reducer;
