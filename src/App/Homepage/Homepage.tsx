import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import MotionComponent from "../../partials/MotionComponent/MotionComponent";

const Homepage = React.memo(() => {
    return <MotionComponent className="homepage px-5 d-flex flex-column gap-3">
        <Header />
        <About />
    </MotionComponent>
});

export default Homepage;