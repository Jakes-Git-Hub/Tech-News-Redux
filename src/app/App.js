import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import "./App.css";
const router = createBrowserRouter(createRoutesFromElements(React.createElement(Route, { path: "/", element: React.createElement(Root, null) },
    React.createElement(Route, { path: 'about', element: React.createElement(About, null) }),
    React.createElement(Route, { path: 'sign-up', element: React.createElement(SignUp, null) }),
    React.createElement(Route, { path: 'articles', element: React.createElement(Articles, null) }),
    React.createElement(Route, { path: 'categories', element: React.createElement(Categories, null) },
        React.createElement(Route, { path: ':name', element: React.createElement(Category, null) })),
    React.createElement(Route, { path: 'profile', element: React.createElement(Profile, null) },
        React.createElement(Route, { path: 'edit', element: React.createElement(EditProfileForm, null) })),
    React.createElement(Route, { path: 'articles/:title', element: React.createElement(Article, null) }),
    React.createElement(Route, { path: 'authors/:name', element: React.createElement(Author, null) }))));
function App() {
    return (React.createElement(RouterProvider, { router: router }));
}
export default App;
