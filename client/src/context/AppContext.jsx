import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [showLogin, setShowLogin] = useState(false);

    const login = (userData, jwtToken) => {
        setUser(userData);
        setToken(jwtToken);
        localStorage.setItem("token", jwtToken);
    };

    const logout = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
    };

    // Fetch user data if token exists on app load
    useEffect(() => {
        if (token) {
            axios.get(`${BASE_URL}/api/user`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(({ data }) => {
                if (data.success) {
                    setUser(prev => ({ ...prev, role: data.role, recentSearchedCities: data.recentSearchedCities }));
                } else {
                    logout();
                }
            })
            .catch(() => logout());
        }
    }, [token]);

    const value = { user, token, login, logout, showLogin, setShowLogin, BASE_URL };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
