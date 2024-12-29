import React, { useState } from "react";

const OrderProcess = () => {
  const [address, setAddress] = useState("");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");

  const handleContinue = () => {
    alert("Continue to payment!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl space-y-6 p-6">
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Product Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Price</p>
              <p className="font-semibold text-gray-700">₹1200</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Bakery Name</p>
              <p className="font-semibold text-gray-700">Sweet Delights</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Quantity</p>
              <p className="font-semibold text-gray-700">1</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Weight</p>
              <p className="font-semibold text-gray-700">1.5 kg</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Occasion</p>
              <p className="font-semibold text-gray-700">Birthday</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Text on Cake</p>
              <p className="font-semibold text-gray-700">"Happy Birthday!"</p>
            </div>
          </div>
        </div>

        {/* Delivery Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Deliver To</h2>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm text-gray-600 mb-2">
              Address
            </label>
            <textarea
              id="address"
              rows="3"
              className="w-full p-2 border rounded-md"
              placeholder="Enter delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="deliveryInstructions"
              className="block text-sm text-gray-600 mb-2"
            >
              Delivery Instructions
            </label>
            <textarea
              id="deliveryInstructions"
              rows="3"
              className="w-full p-2 border rounded-md"
              placeholder="Enter delivery instructions"
              value={deliveryInstructions}
              onChange={(e) => setDeliveryInstructions(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Items Cost</p>
              <p className="font-semibold text-gray-700">₹1200</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Delivery Fee</p>
              <p className="font-semibold text-gray-700">₹100</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Platform Fee</p>
              <p className="font-semibold text-gray-700">₹50</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Donation</p>
              <p className="font-semibold text-gray-700">₹10</p>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
