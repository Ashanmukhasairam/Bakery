import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MarketPlace from "./components/MarketPlace"; // Adjust the path based on your folder structure
import OrderProcess from "./components/OrderProcess"; // Adjust the path based on your folder structure

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Main Content */}
        <div className="p-6">
          <Routes>
            <Route
              path="/"
              element={<h2 className="text-center text-3xl font-semibold text-gray-800">Welcome to My App</h2>}
            />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/order-process" element={<OrderProcess />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
