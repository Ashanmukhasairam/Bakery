import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Myproducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chocolate Cake",
      description: "Delicious chocolate cake with rich frosting.",
      price: "$25",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Vanilla Cake",
      description: "Classic vanilla cake with buttercream icing.",
      price: "$20",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Red Velvet Cake",
      description: "Moist red velvet cake with cream cheese frosting.",
      price: "$30",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "New Cake",
      description: "Description of the new cake.",
      price: "$0",
      image: "https://via.placeholder.com/150",
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-10">
        <h1 className="text-3xl font-bold mb-8">My Products</h1>

        {products.length > 0 ? (
          <div className="w-96 bg-white shadow-md rounded-lg p-4 relative">
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {products[currentIndex].name}
              </h2>
              <p className="text-gray-600">
                {products[currentIndex].description}
              </p>
              <p className="text-lg font-bold mt-2">
                {products[currentIndex].price}
              </p>
            </div>
            <button
              onClick={() => handleDelete(products[currentIndex].id)}
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ) : (
          <p className="text-gray-500">No products available. Add new products to get started.</p>
        )}

        <div className="flex justify-between items-center mt-6 space-x-4">
          <button
            onClick={handlePrev}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            &gt;
          </button>
        </div>

        <button
          onClick={handleAddProduct}
          className="mt-8 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
        >
          Add New Product
        </button>
      </div>
    </div>
  );
};

export default Myproducts;