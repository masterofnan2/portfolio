import React from "react";
import { home } from "../../core/config/links/pages";
import linkId from "../../core/helpers/linkId";

export const AppContext = React.createContext({
    navbar: {
        active: linkId(home),
        setActive: (pathname: string) => {pathname},
    }
});