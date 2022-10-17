import { useReducer } from "react";
import { createContext } from "react";
import  AuthReducer  from "./AuthReducer";

// User's state (initial state)
const initialState = {
    user: null,
    isFetching: false,
    error: false
}

// Control state in global

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(AuthReducer, initialState);
    return(
        <AuthContext.Provider 
            value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}