import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Newitem = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    bakery: "",
    image: null,
    theme: "",
    availability: 0,
    rating: 0,
  });

  const [imagePreview, setImagePreview] = useState(""); // For image preview

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file change for image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Set the image in form data
      setFormData({ ...formData, image: file });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to send to the server
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("bakery", formData.bakery);
    data.append("theme", formData.theme);
    data.append("availability", formData.availability);
    data.append("rating", formData.rating);
    data.append("image", formData.image); // Append the image file

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (result.imageUrl) {
        console.log("Image uploaded successfully:", result.imageUrl);
        // You can now save the image URL in your database or display it
        navigate("/"); // Redirect after submission
      } else {
        console.log("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">Add New Product</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Price Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Bakery Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Bakery</label>
            <input
              type="text"
              name="bakery"
              value={formData.bakery}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-700">Image Upload</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mb-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          )}

          {/* Theme Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Theme</label>
            <input
              type="text"
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Availability Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Availability</label>
            <input
              type="number"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Rating Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              min="0"
              max="5"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newitem;
