"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
function Footer() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var goBack = function () {
        navigate(-1);
    };
    var goForward = function () {
        navigate(1);
    };
    return (react_1.default.createElement("footer", null,
        react_1.default.createElement("button", { onClick: goBack }, "Back"),
        react_1.default.createElement("button", { onClick: goForward }, "Forward")));
}
