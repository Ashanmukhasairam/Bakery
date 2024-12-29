import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState([
    {
      order_id: "ORD001",
      cakes: [
        { name: "Chocolate Cake", price: 500, image: "chocolate-cake.jpg", quantity: 2 },
        { name: "Vanilla Cake", price: 300, image: "vanilla-cake.jpg", quantity: 1 },
      ],
      orderDate: "2024-12-20",
      orderStatus: "Pending",
    },
    {
      order_id: "ORD002",
      cakes: [
        { name: "Red Velvet Cake", price: 700, image: "red-velvet-cake.jpg", quantity: 1 },
      ],
      orderDate: "2024-12-22",
      orderStatus: "Completed",
    },
    {
      order_id: "ORD003",
      cakes: [
        { name: "Black Forest Cake", price: 600, image: "black-forest-cake.jpg", quantity: 3 },
      ],
      orderDate: "2024-12-23",
      orderStatus: "Processing",
    },
  ]);

  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.order_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header with Search */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
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

        {/* Order Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.map((order) => (
            <div
              key={order.order_id}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition"
              onClick={() => navigate(`/orderdetails/${order.order_id}`)}
            >
              <h2 className="text-lg font-bold text-gray-700 mb-2">
                Order ID: {order.order_id}
              </h2>
              <p className="text-sm text-gray-600 mb-2">Order Date: {order.orderDate}</p>
              <p className="text-sm text-gray-600 mb-4">Order Status: {order.orderStatus}</p>

              <div className="grid grid-cols-2 gap-2">
                {order.cakes.map((cake, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={cake.image}
                      alt={cake.name}
                      className="w-16 h-16 object-cover rounded-md mx-auto"
                    />
                    <p className="text-sm text-gray-700 mt-2">{cake.name}</p>
                    <p className="text-sm text-gray-500">₹{cake.price}</p>
                    <p className="text-sm text-gray-500">Qty: {cake.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
