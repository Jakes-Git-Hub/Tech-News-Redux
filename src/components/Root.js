"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Header_1 = __importDefault(require("../components/Header"));
var Footer_1 = __importDefault(require("../components/Footer"));
var react_router_dom_1 = require("react-router-dom");
var Root = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("main", null,
            react_1.default.createElement(react_router_dom_1.Outlet, null)),
        react_1.default.createElement(Footer_1.default, null)));
};
exports.default = Root;
