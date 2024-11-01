"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var About = function () {
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("p", null,
            "This application contains snippets from various Codecademy articles. You can browse all our articles and read them in their entirety ",
            react_1.default.createElement("a", { href: "https://www.codecademy.com/articles" }, "here"),
            ".")));
};
exports.default = About;
