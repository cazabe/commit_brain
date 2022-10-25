import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home_page/home_page";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default Router