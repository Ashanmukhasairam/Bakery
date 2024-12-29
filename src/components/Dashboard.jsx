import React from "react";
import Sidebar from "./Sidebar";
import { FaBell } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default Dashboard;
