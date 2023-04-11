import { createContext } from "react"

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value='Hi'>{children}</AppContext.Provider>;
};

export { AppProvider };