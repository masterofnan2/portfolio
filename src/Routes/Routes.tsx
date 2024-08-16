import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../App/Homepage/Homepage";
import App from "../App/App";
import About from "../App/About/About";
import { about, home } from "../core/config/links/pages";
import { AnimatePresence } from "framer-motion";

const AppRoutes = React.memo(() => {
    const location = useLocation();

    return <AnimatePresence>
        <Routes location={location} key={location.key}>
            <Route element={<App />}>
                <Route element={<Homepage />} path={home} />
                <Route element={<About />} path={about} />
            </Route>
        </Routes>
    </AnimatePresence>
});

export default AppRoutes;