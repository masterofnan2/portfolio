import React from "react";
import AppNavbar from "../partials/AppNavbar/AppNavbar";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import AppContextProvider from "./options/providers";
import Works from "./Works/Works";
import Technologies from "./Technologies/Technologies";
import Contact from "./Contact/Contact";
import linkId from "../core/helpers/linkId";
import { scrollContainer } from "../core/config/links/pages";
import { useLocation } from "react-router-dom";
import manualScroll from "../core/helpers/manualScroll";

const delay = 500;
let timeout: number | null;

const App = React.memo(() => {
    const { hash } = useLocation();

    React.useEffect(() => {
        if (hash && !timeout) {
            timeout = setTimeout(() => {
                manualScroll(hash);
                timeout = null;
            }, delay);
        }
    }, []);

    return <AppContextProvider>
        <div className="app">
            <AppNavbar />
            <div id={linkId(scrollContainer)}>
                <Homepage />
                <About />
                <Works />
                <Technologies />
                <Contact />
            </div>
        </div>
    </AppContextProvider>
})

export default App;