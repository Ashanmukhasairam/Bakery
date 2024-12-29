import React from "react";
import Sidebar from "./Sidebar";
import { FaBell } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 ml-2">
        {" "}
        {/* Reduced margin to align better with the sidebar */}
        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 h-full relative">
          {/* Top-right Buttons (Notification + Login) */}
          <div className="absolute top-4 right-4 flex space-x-4">
            {/* Notification Button (Bell Icon Only) */}
            <button className="bg-orange-500 text-white p-3 rounded-md flex items-center">
              <FaBell className="w-5 h-5" />
            </button>

            {/* Login Button */}
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
              P
            </button>
          </div>

          {/* Main Content Area */}
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to the Dashboard
          </h1>
          <p className="mt-4 text-gray-600">
            Select an option from the sidebar to view more details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
