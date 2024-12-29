import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import MarketPlace from "./components/MarketPlace";
import OrderProcess from "./components/OrderProcess";
import Overview from "./components/Overview";
import Login from "./components/login";
import SignupPage from "./components/signup";
import Myproducts from "./components/Myproducts";
import Orders from "./components/Orders";

const App = () => {
  const [bakery, setBakery] = useState(() => {
    const savedBakery = localStorage.getItem("bakery");
    return savedBakery ? JSON.parse(savedBakery) : null;
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token && !bakery) {
      const fetchBakeryData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/account/bakery`, {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          });
          setBakery(response.data.bakery);
          localStorage.setItem("bakery", JSON.stringify(response.data.bakery));
        } catch (error) {
          console.error("Error fetching bakery data:", error);
        }
      };

      fetchBakeryData();
    }
  }, [bakery]);

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <div className="p-6">
          <Routes>
            <Route
              path="/"
              element={
                bakery ? <Navigate to="/overview" /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/login"
              element={
                bakery ? (
                  <Navigate to="/overview" />
                ) : (
                  <Login setBakery={(data) => {
                    setBakery(data);
                    localStorage.setItem("bakery", JSON.stringify(data));
                  }} />
                )
              }
            />
            <Route
              path="/signup"
              element={
                bakery ? (
                  <Navigate to="/overview" />
                ) : (
                  <SignupPage />
                )
              }
            />
            <Route
              path="/overview"
              element={bakery ? <Overview /> : <Navigate to="/login" />}
            />
            <Route
              path="/marketplace"
              element={bakery ? <MarketPlace /> : <Navigate to="/login" />}
            />
            <Route
              path="/order-process"
              element={bakery ? <OrderProcess /> : <Navigate to="/login" />}
            />
            <Route
              path="/orders"
              element={bakery ? <Orders /> : <Navigate to="/login" />}
            />
            <Route
              path="/myproducts"
              element={bakery ? <Myproducts /> : <Navigate to="/login" />}
            />
            <Route
              path="*"
              element={
                bakery ? <Navigate to="/overview" /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
