import React from "react";
import Header from "./Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Root;