import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    user: null,
    isAuthenticated: false,
    token: localStorage.getItem('token') || null,  // Retrieve token from localStorage on load
  });

  // Function to store user and token in state & localStorage
  const setAuthData = (user, token) => {
    localStorage.setItem('token', token);  // Store token
    setAuthState({ user, isAuthenticated: true, token });
  };

  const login = useCallback(async (credentials) => {
    console.log("Login credentials sent to backend:", credentials);
    try {
      const response = await fetch('/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
  
      const data = await response.json();
      setAuthData(data.user, data.token);  // Store user and token
    } catch (error) {
      console.error('Login error:', error);
      alert(error.message);
      throw error;
    }
  }, []);

  const signup = useCallback(async (credentials) => {
    try {
      const response = await fetch('/api/v1/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) throw new Error('Signup failed');

      const data = await response.json();
      setAuthData(data.user, data.token);  // Store user and token
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');  // Remove token from localStorage
    setAuthState({ user: null, isAuthenticated: false, token: null });
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
