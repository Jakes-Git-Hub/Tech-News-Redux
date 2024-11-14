"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditProfileForm;
var react_1 = __importStar(require("react"));
var sessionSlice_1 = require("../features/session/sessionSlice");
var react_redux_1 = require("react-redux");
function EditProfileForm() {
    var _a = (0, react_1.useState)(""), username = _a[0], setUsername = _a[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleSubmit = function (e) {
        e.preventDefault();
        dispatch((0, sessionSlice_1.editUser)({ username: username }));
    };
    return (react_1.default.createElement("section", null,
        react_1.default.createElement("h2", null, "Edit Username"),
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("label", null,
                "Username",
                react_1.default.createElement("div", null,
                    react_1.default.createElement("input", { id: "username", value: username, onChange: function (e) { return setUsername(e.currentTarget.value); } }),
                    react_1.default.createElement("button", { className: "primary" }, "Edit"))))));
}
