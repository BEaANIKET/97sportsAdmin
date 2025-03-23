import React, { createContext, useEffect, useState } from "react";
import { onLoginWithCredentials } from "./auth.service";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const onLogin = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await onLoginWithCredentials(username, password);
      if (!response.status) {
        throw new Error(response.message || "Invalid credentials");
      }

      localStorage.setItem("token", response.session_token); 
      localStorage.setItem("user", JSON.stringify(response)); 

      setToken(response.session_token);
      setUser(response);
      setIsAuthenticated(true);
    } catch (e) {
      setError(e.message);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, onLogin, onLogout, user, loading, error, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
