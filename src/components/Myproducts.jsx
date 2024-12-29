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
      theme: "Chocolate",
      availability: 10, // Set initial available quantity
      rating: 4,
    },
    {
      id: 2,
      name: "Vanilla Cake",
      description: "Classic vanilla cake with buttercream icing.",
      price: "$20",
      image: "https://via.placeholder.com/150",
      theme: "Vanilla",
      availability: 5,
      rating: 3,
    },
    {
      id: 3,
      name: "Red Velvet Cake",
      description: "Moist red velvet cake with cream cheese frosting.",
      price: "$30",
      image: "https://via.placeholder.com/150",
      theme: "Red Velvet",
      availability: 7,
      rating: 5,
    },
    {
      id: 4,
      name: "Strawberry Cake",
      description: "Fresh strawberry cake with whipped cream.",
      price: "$22",
      image: "https://via.placeholder.com/150",
      theme: "Strawberry",
      availability: 3,
      rating: 4,
    },
    {
      id: 5,
      name: "Carrot Cake",
      description: "Delicious carrot cake with cream cheese frosting.",
      price: "$18",
      image: "https://via.placeholder.com/150",
      theme: "Carrot",
      availability: 2,
      rating: 5,
    },
    {
      id: 6,
      name: "Lemon Cake",
      description: "Tangy lemon cake with a zesty glaze.",
      price: "$26",
      image: "https://via.placeholder.com/150",
      theme: "Lemon",
      availability: 8,
      rating: 4,
    },
    {
      id: 7,
      name: "Blueberry Cake",
      description: "A sweet blueberry cake topped with fresh fruit.",
      price: "$24",
      image: "https://via.placeholder.com/150",
      theme: "Blueberry",
      availability: 6,
      rating: 5,
    },
    {
      id: 8,
      name: "Coconut Cake",
      description: "Rich coconut cake with a creamy coconut frosting.",
      price: "$28",
      image: "https://via.placeholder.com/150",
      theme: "Coconut",
      availability: 4,
      rating: 3,
    },
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, availability: product.availability + 1 }
          : product
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.availability > 0
          ? { ...product, availability: product.availability - 1 }
          : product
      )
    );
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "New Cake",
      description: "Description of the new cake.",
      price: "$0",
      image: "https://via.placeholder.com/150",
      theme: "New",
      availability: 0, // Initially set the availability to 0
      rating: 4,
    };
    setProducts([...products, newProduct]);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-${i < rating ? "yellow" : "gray"}-500`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Heading and Add New Product button aligned in a row */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-orange-500">My Products</h1>
          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-all"
          >
            Add New Product
          </button>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-all hover:opacity-80" // Decreased height here
                />
                <div className="p-4"> {/* Reduced padding */}
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 truncate overflow-hidden whitespace-nowrap h-7">{product.description}</p>


                  {/* Theme Section - Highlighted */}
                  <p className="text-lg font-bold text-orange-500 mb-4">
                    Theme: {product.theme}
                  </p>

                  <p className="text-lg font-bold text-gray-800">{product.price}</p>

                  {/* Editable Quantity Section */}
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-500">Availability:</p>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleDecreaseQuantity(product.id)}
                        className="bg-gray-300 p-2 rounded-md hover:bg-gray-400 transition-all"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={product.availability}
                        readOnly
                        className="text-center w-12 border border-gray-300 rounded-md py-2 bg-gray-50"
                      />
                      <button
                        onClick={() => handleIncreaseQuantity(product.id)}
                        className="bg-gray-300 p-2 rounded-md hover:bg-gray-400 transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Rating Section */}
                  <div className="flex items-center mt-2">
                    <p className="mr-2">Rating:</p>
                    {renderStars(product.rating)}
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products available. Add new products to get started.</p>
        )}
      </div>
    </div>
  );
};

export default Myproducts;
