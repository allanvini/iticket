import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export default function UserContextProvider({ children }) {

    const [userContext, setUserContext] = useState({
        isLoggedIn: false,
        id: null,
        email: "",
        password: "",
        username: ""
      })

    return (
        <UserContext.Provider value={{ userContext, setUserContext }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext(){
    const context = useContext(UserContext);
    if(!context) throw new Error("useUserContext must be used within a UserContext component");
    const {userContext, setUserContext} = context;
    return {userContext, setUserContext};
}
