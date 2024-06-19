// context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false); // Set to true to simulate loading if needed

  const signIn = (value) => {
    // Simulate sign-in logic (replace with actual authentication logic)
    setLoading(true);
    setTimeout(() => {
      setCurrentUser(value); // Mock user data
      setLoading(false);
    }, 2000); // Simulate loading delay
  };

  const signOut = () => {
    // Simulate sign-out logic
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    signIn,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
