import React from "react";
import AppNavbar from "../partials/AppNavbar/AppNavbar";
import { Outlet } from "react-router-dom";

const App = React.memo(() => {
    return <div className="mx-md-5 mx-3">
        <AppNavbar />
        <div className="mt-5 pt-5">
            <Outlet />
        </div>
    </div>
})

export default App;