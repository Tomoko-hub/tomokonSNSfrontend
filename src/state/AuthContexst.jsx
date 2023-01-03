import { useEffect, useReducer } from "react";
import { createContext } from "react";
import  AuthReducer  from "./AuthReducer";

// User's state (initial state)
const initialState = {
    //user: JSON.parse(localStorage.getItem('user')) || null,
    user: {
        _id: "62af6bb0acd2115799660bbe",
        username: "tomomann",
        email:"tomotomoco@hotmail.com",
        password:"abcdef123",
        profilePicture: "/person/1.jpeg",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin:false
    },
    isFetching: false,
    error: false,
};

// Control state in global

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    /*useEffect(()=> {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);
    */
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