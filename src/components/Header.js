"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var sessionSlice_1 = require("../features/session/sessionSlice");
var react_router_dom_1 = require("react-router-dom");
function Header() {
    var currentUser = (0, react_redux_1.useSelector)(sessionSlice_1.selectCurrentUser);
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleLogout = function (e) {
        dispatch((0, sessionSlice_1.logOut)());
    };
    return (react_1.default.createElement("div", { className: "header" },
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/about" }, "About"),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/articles" }, "Articles"),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/categories" }, "Categories"),
        currentUser.username ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/profile" }, "Profile"),
            react_1.default.createElement("button", { onClick: handleLogout, className: "logout" }, "Log Out"))) : (react_1.default.createElement(react_router_dom_1.NavLink, { to: "/sign-up" }, "Sign Up"))));
}
