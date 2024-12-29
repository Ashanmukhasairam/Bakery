import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search bar
  const [orders, setOrders] = useState([
    {
      orderId: "ORD001",
      orderPlacedDate: "2024-12-20",
      eventType: "Event A",
      description: "Customer wants a large banner.",
      cost: 0,
    },
    {
      orderId: "ORD002",
      orderPlacedDate: "2024-12-22",
      eventType: "Event B",
      description: "Customer needs custom printing.",
      cost: 0,
    },
    {
      orderId: "ORD003",
      orderPlacedDate: "2024-12-23",
      eventType: "Event C",
      description: "Customer requests gift packaging.",
      cost: 0,
    },
    // Add more dummy orders as needed
  ]);

  // Handle search term input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle cost change
  const handleCostChange = (orderId, newCost) => {
    setOrders(orders.map(order =>
      order.orderId === orderId ? { ...order, cost: newCost } : order
    ));
  };

  // Handle accept/reject action
  const handleAccept = (orderId) => {
    alert(`Order ${orderId} Accepted`);
  };

  const handleReject = (orderId) => {
    alert(`Order ${orderId} Rejected`);
  };

  // Filtered orders based on search term
  const filteredOrders = orders.filter((order) =>
    order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.eventType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          {/* Marketplace Title and Search bar */}
          <h1 className="text-2xl font-bold text-gray-800">Marketplace</h1>
          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 py-2 border rounded-md"
              placeholder="Search Orders"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute left-3 top-2 text-gray-500 mt-1" />
          </div>
        </div>

        {/* Order List */}
        <div className="mt-6">
          {/* Each row will display 3 orders in cards */}
          {filteredOrders.map((order, index) => (
            <div className="flex space-x-4 mb-4" key={order.orderId}>
              <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
                <h2 className="text-lg font-bold text-gray-700">Order ID: {order.orderId}</h2>
                <p className="text-sm text-gray-600">Order Placed: {order.orderPlacedDate}</p>
                <p className="text-sm text-gray-600">Event Type: {order.eventType}</p>
                <p className="text-sm text-gray-600">Description: {order.description}</p>
                
                {/* Cost and Action buttons */}
                <div className="mt-4 flex items-center space-x-2">
                  <input
                    type="number"
                    value={order.cost}
                    onChange={(e) => handleCostChange(order.orderId, e.target.value)}
                    className="w-20 p-2 border rounded-md"
                    placeholder="Cost"
                  />
                  <button
                    onClick={() => handleAccept(order.orderId)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(order.orderId)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Reject
                  </button>
                </div>
              </div>

              {/* Add two more cards for this row */}
              <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
                <h2 className="text-lg font-bold text-gray-700">Order ID: {order.orderId}</h2>
                <p className="text-sm text-gray-600">Order Placed: {order.orderPlacedDate}</p>
                <p className="text-sm text-gray-600">Event Type: {order.eventType}</p>
                <p className="text-sm text-gray-600">Description: {order.description}</p>
                
                {/* Cost and Action buttons */}
                <div className="mt-4 flex items-center space-x-2">
                  <input
                    type="number"
                    value={order.cost}
                    onChange={(e) => handleCostChange(order.orderId, e.target.value)}
                    className="w-20 p-2 border rounded-md"
                    placeholder="Cost"
                  />
                  <button
                    onClick={() => handleAccept(order.orderId)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(order.orderId)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Reject
                  </button>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
                <h2 className="text-lg font-bold text-gray-700">Order ID: {order.orderId}</h2>
                <p className="text-sm text-gray-600">Order Placed: {order.orderPlacedDate}</p>
                <p className="text-sm text-gray-600">Event Type: {order.eventType}</p>
                <p className="text-sm text-gray-600">Description: {order.description}</p>
                
                {/* Cost and Action buttons */}
                <div className="mt-4 flex items-center space-x-2">
                  <input
                    type="number"
                    value={order.cost}
                    onChange={(e) => handleCostChange(order.orderId, e.target.value)}
                    className="w-20 p-2 border rounded-md"
                    placeholder="Cost"
                  />
                  <button
                    onClick={() => handleAccept(order.orderId)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(order.orderId)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image on top-right corner */}
        <div className="absolute top-4 right-4">
          <img src="your-image-url.jpg" alt="Marketplace" className="w-32 h-32 object-cover rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Orders;
