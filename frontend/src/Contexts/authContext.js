// AuthContext.js
import React, { createContext, useReducer, useContext, useEffect } from "react";

// Create Context
const AuthContext = createContext();

// Initial State
const initialState = {
  isAuthenticated: false,
  user: null, // will hold { username, token }
  loading: false,
  error: null,
};

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
    case "SIGNUP_REQUEST":
      return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: {
          username: action.payload.username,
          token: action.payload.token,
        },
        loading: false,
        error: null,
      };

    case "LOGIN_ERROR":
    case "SIGNUP_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "LOGOUT":
      return { ...initialState };

    default:
      return state;
  }
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedToken = localStorage.getItem("token");

    if (storedUsername && storedToken) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { username: storedUsername, token: storedToken },
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);
