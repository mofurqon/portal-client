import { ImportExport } from "@material-ui/icons";
import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false, 
    login: () => {}, 
    logout: () => {} 
});