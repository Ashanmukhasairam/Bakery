/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [bakery, setBakery] = useState(() => {
    const savedBakery = localStorage.getItem('bakery');
    return savedBakery ? JSON.parse(savedBakery) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !bakery) {
      const fetchBakeryData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/account/bakery`,
            {
              headers: { Authorization: `Bearer ${token}` },
              withCredentials: true,
            }
          );
          setBakery(response.data.bakery);
          localStorage.setItem('bakery', JSON.stringify(response.data.bakery));
        } catch (error) {
          console.error('Error fetching bakery data:', error);
        }
      };

      fetchBakeryData();
    }
  }, [bakery]);

  const isAuthenticated = !!localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('bakery');
    Cookies.remove('token', { path: '/', sameSite: 'None', secure: true });
    setBakery(null);
  };

  return (
    <UserContext.Provider value={{ bakery, setBakery, isAuthenticated, logout }}>
      {children}
    </UserContext.Provider>
  );
};