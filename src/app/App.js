"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var About_1 = __importDefault(require("../components/About"));
var SignUp_1 = __importDefault(require("../components/SignUp"));
var Articles_1 = __importDefault(require("../components/Articles"));
var Article_1 = __importDefault(require("../components/Article"));
var Categories_1 = __importDefault(require("../components/Categories"));
var Category_1 = __importDefault(require("../components/Category"));
var Author_1 = __importDefault(require("../components/Author"));
var Profile_1 = __importDefault(require("../components/Profile"));
var EditProfileForm_1 = __importDefault(require("../components/EditProfileForm"));
var Root_1 = __importDefault(require("../components/Root"));
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var router = (0, react_router_dom_1.createBrowserRouter)((0, react_router_dom_1.createRoutesFromElements)(react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Root_1.default, null) },
    react_1.default.createElement(react_router_dom_1.Route, { path: 'about', element: react_1.default.createElement(About_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: 'sign-up', element: react_1.default.createElement(SignUp_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: 'articles', element: react_1.default.createElement(Articles_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: 'categories', element: react_1.default.createElement(Categories_1.default, null) },
        react_1.default.createElement(react_router_dom_1.Route, { path: ':name', element: react_1.default.createElement(Category_1.default, null) })),
    react_1.default.createElement(react_router_dom_1.Route, { path: 'profile', element: react_1.default.createElement(Profile_1.default, null) },
        react_1.default.createElement(react_router_dom_1.Route, { path: 'edit', element: react_1.default.createElement(EditProfileForm_1.default, null) })),
    react_1.default.createElement(react_router_dom_1.Route, { path: 'articles/:title', element: react_1.default.createElement(Article_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: 'authors/:name', element: react_1.default.createElement(Author_1.default, null) }))));
function App() {
    return (react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router }));
}
exports.default = App;
