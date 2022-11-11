import { useReducer } from "react";
import { createContext } from "react";
import  AuthReducer  from "./AuthReducer";

// User's state (initial state)
const initialState = {
    //user: null,
    user: {
        _id: "62af6bb0acd2115799660bbe",
        username: "tomoko",
        email:"tomotomoco@hotmail.com",
        password:"abcdef123",
        profilePicture: "",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin:false
    },
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