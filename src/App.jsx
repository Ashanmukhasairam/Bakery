import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MarketPlace from "./components/MarketPlace"; // Adjust the path based on your folder structure
import OrderProcess from "./components/OrderProcess"; // Adjust the path based on your folder structure
import Overview from "./components/Overview";
import Login from "./components/Login"
import SignupPage from "./components/Signup";
import MyProducts from "./components/MyProducts";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Main Content */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Overview/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/order-process" element={<OrderProcess />} />
            <Route path="/overview" element={<Overview/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/orders" element={<order/>}/>
            <Route path="/myproducts" element={<MyProducts/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
