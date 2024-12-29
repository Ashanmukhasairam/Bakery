import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const OrderDetail = () => {
  const { order_id } = useParams(); // Extract order_id from the URL

  // Replace this with actual order fetching logic
  const order = {
    order_id: order_id,
    cakes: [
      {
        name: "Vanilla Cake",
        price: 300,
        image:
          "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg",
        quantity: 1,
        theme: "Classic Vanilla Elegance",
        description:
          "A delightful vanilla cake with a creamy texture, perfect for any occasion. Crafted with the finest ingredients for a taste that lingers.",
      },
    ],
    orderDate: "2024-12-20T14:30:00",
    orderStatus: "Pending",
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Order Details</h1>
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-xl p-6">
          {/* Left Side: Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              src={order.cakes[0].image}
              alt={order.cakes[0].name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Right Side: Details */}
          <div className="flex-1 lg:ml-8 mt-6 lg:mt-0">
            <h2 className="text-2xl font-bold text-gray-800">{order.cakes[0].name}</h2>
            <p className="text-gray-600 text-lg mt-2">{order.cakes[0].description}</p>

            <div className="mt-4">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Price:</span> ₹{order.cakes[0].price}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Quantity:</span> {order.cakes[0].quantity}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Order ID:</span> {order.order_id}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Status:</span> {order.orderStatus}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Theme:</span> {order.cakes[0].theme}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                Baking
              </button>
              <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
                Ready to Pickup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
