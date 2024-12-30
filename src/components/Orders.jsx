import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

// Helper function to format the date and time
const formatDateTime = (dateTime) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Date(dateTime).toLocaleString(undefined, options);
};

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [orders] = useState([
    {
      order_id: "ORD001",
      cakes: [
        { name: "Vanilla Cake", price: 300, image: "https://example.com/vanilla.jpg", quantity: 1 },
      ],
      orderDate: "2024-12-20T14:30:00",
      orderStatus: "Pending",
    },
    {
      order_id: "ORD002",
      cakes: [
        { name: "Chocolate Cake", price: 450, image: "https://example.com/chocolate.jpg", quantity: 2 },
      ],
      orderDate: "2024-12-22T10:00:00",
      orderStatus: "Completed",
    },
  ]);

  const navigate = useNavigate();
  const handleSearch = (event) => setSearchTerm(event.target.value);

  const handleStatusChange = (event) => setSelectedStatus(event.target.value);

  const sortedOrders = [...orders]
    .filter(
      (order) =>
        (order.order_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.cakes.some((cake) => cake.name.toLowerCase().includes(searchTerm.toLowerCase()))) &&
        (selectedStatus === "All" || order.orderStatus === selectedStatus)
    );

  const getStatusColor = (status) => {
    const colors = {
      Completed: "bg-green-500 text-white",
      Processing: "bg-orange-500 text-white",
      Pending: "bg-red-500 text-white",
    };
    return colors[status] || "bg-gray-500 text-white";
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">Orders</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search Orders"
                value={searchTerm}
                onChange={handleSearch}
              />
              <FaSearch className="absolute left-3 top-2 text-gray-500 mt-1" />
            </div>
            <select
              value={selectedStatus}
              onChange={handleStatusChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedOrders.length > 0 ? (
            sortedOrders.map((order) => (
              <div
                key={order.order_id}
                className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden h-[350px]"
                onClick={() => navigate(`/orderdetail/${order.order_id}`)}
              >
                <div className="h-[35%] overflow-hidden">
                  <img
                    src={order.cakes[0].image}
                    alt={order.cakes[0].name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 h-[65%]">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Order ID: {order.order_id}
                  </h2>
                  {order.cakes.map((cake, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-lg font-bold text-gray-800">{cake.name}</p>
                      <p className="text-sm text-gray-600">Price: ₹{cake.price}</p>
                      <p className="text-sm text-gray-600">Quantity: {cake.quantity}</p>
                    </div>
                  ))}
                  <p className="text-sm text-gray-600 mb-2">
                    {formatDateTime(order.orderDate)}
                  </p>
                  <p
                    className={`text-sm font-semibold mt-2 ${getStatusColor(
                      order.orderStatus
                    )} inline-block px-2 py-1`}
                  >
                    {order.orderStatus}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              No orders found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
