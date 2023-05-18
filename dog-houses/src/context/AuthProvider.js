import React, { createContext, useState } from "react";

// Create a context object for the authentication status
export const AuthContext = createContext();

// Define the AuthProvider component
const AuthProvider = ({ children }) => {
  // Set the initial authentication state to "not authenticated"
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to toggle the authentication state
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  // Pass the authentication status and toggle function down to child components
  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
