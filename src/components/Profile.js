"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var sessionSlice_1 = require("../features/session/sessionSlice");
var Profile = function () {
    var currentUser = (0, react_redux_1.useSelector)(sessionSlice_1.selectCurrentUser);
    var loggedIn = (0, react_redux_1.useSelector)(sessionSlice_1.selectIsLoggedIn);
    if (!loggedIn) {
        return react_1.default.createElement(react_router_dom_1.Navigate, { to: '/sign-up' });
    }
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("h1", null, currentUser.username),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/profile/edit" }, "Edit"),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
};
exports.default = Profile;
