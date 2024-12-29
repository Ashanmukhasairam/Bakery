import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

const MarketPlace = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search bar
  const [orders, setOrders] = useState([]);

  // Simulating fetching data from an API or Database
  useEffect(() => {
    // Sample data (replace this with actual fetch when backend is ready)
    const sampleOrders = [
      {
        orderId: "ORD001",
        orderPlacedDate: "2024-12-20",
        eventType: "Event A",
        description: "Customer wants a large banner.",
        cost: 0,
        image: "https://via.placeholder.com/150", // Placeholder image URL
      },
      {
        orderId: "ORD002",
        orderPlacedDate: "2024-12-22",
        eventType: "Event B",
        description: "Customer needs custom printing.",
        cost: 0,
        image: "https://via.placeholder.com/150",
      },
      {
        orderId: "ORD003",
        orderPlacedDate: "2024-12-23",
        eventType: "Event C",
        description: "Customer requests gift packaging.",
        cost: 0,
        image: "https://via.placeholder.com/150",
      },
      {
        orderId: "ORD004",
        orderPlacedDate: "2024-12-24",
        eventType: "Event D",
        description: "Customer requests a custom design.",
        cost: 0,
        image: "https://via.placeholder.com/150",
      },
      // Add more orders as needed
    ];
    setOrders(sampleOrders); // Simulating setting data from API response
  }, []);

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
      <div className="flex-1 p-6 ml-64">
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
          {/* Each row will display 2 orders in cards */}
          {filteredOrders.map((order, index) => {
            if (index % 2 === 0) {
              // This ensures we display two orders per row
              const nextOrder = filteredOrders[index + 1];
              return (
                <div className="flex space-x-4 mb-6" key={order.orderId}>
                  {/* Display the current order */}
                  <div className="bg-white rounded-lg shadow-md flex-1">
                    <img
                      src={order.image}
                      alt={`Order ${order.orderId}`}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h2 className="text-lg font-bold text-gray-700">Order ID: {order.orderId}</h2>
                      <p className="text-sm text-gray-600">Order Placed: {order.orderPlacedDate}</p>
                      <p className="text-sm text-gray-600">Event Type: {order.eventType}</p>
                      <p className="text-sm text-gray-600">Description: {order.description}</p>

                      {/* Cost and Action buttons */}
                      <div className="mt-4 flex items-center space-x-4">
                        <input
                          type="number"
                          value={order.cost}
                          onChange={(e) => handleCostChange(order.orderId, e.target.value)}
                          className="w-28 p-2 border rounded-md"
                          placeholder="Cost"
                        />
                        <button
                          onClick={() => handleAccept(order.orderId)}
                          className="bg-green-500 text-white px-6 py-3 rounded-md"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(order.orderId)}
                          className="bg-red-500 text-white px-6 py-3 rounded-md"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Display the next order */}
                  {nextOrder && (
                    <div className="bg-white rounded-lg shadow-md flex-1">
                      <img
                        src={nextOrder.image}
                        alt={`Order ${nextOrder.orderId}`}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <div className="p-6">
                        <h2 className="text-lg font-bold text-gray-700">Order ID: {nextOrder.orderId}</h2>
                        <p className="text-sm text-gray-600">Order Placed: {nextOrder.orderPlacedDate}</p>
                        <p className="text-sm text-gray-600">Event Type: {nextOrder.eventType}</p>
                        <p className="text-sm text-gray-600">Description: {nextOrder.description}</p>

                        {/* Cost and Action buttons */}
                        <div className="mt-4 flex items-center space-x-4">
                          <input
                            type="number"
                            value={nextOrder.cost}
                            onChange={(e) => handleCostChange(nextOrder.orderId, e.target.value)}
                            className="w-28 p-2 border rounded-md"
                            placeholder="Cost"
                          />
                          <button
                            onClick={() => handleAccept(nextOrder.orderId)}
                            className="bg-green-500 text-white px-6 py-3 rounded-md"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleReject(nextOrder.orderId)}
                            className="bg-red-500 text-white px-6 py-3 rounded-md"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
