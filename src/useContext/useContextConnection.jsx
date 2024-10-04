import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user');
      const savedToken = localStorage.getItem('token');

      // Vérifier que savedUser et savedToken ne sont pas null ou undefined
      if (savedUser && savedUser !== 'undefined') {
        setUser(JSON.parse(savedUser));
      }

      if (savedToken && savedToken !== 'undefined') {
        setToken(savedToken);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur depuis localStorage", error);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
