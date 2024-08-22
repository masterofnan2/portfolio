import React from "react";
import { AppContext } from "./contexts";

export const useNavbar = () => {
  return React.useContext(AppContext).navbar;
};
