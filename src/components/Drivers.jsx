import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Importing axios for making HTTP requests
import Sidebar from "./Sidebar"; // Assuming you have this component

const Drives = () => {
  const [drivers, setDrivers] = useState([]); // State to store the list of drivers
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Fetch available drivers from the server
  const fetchDrivers = async () => {
    try {
      // Make an API call to get the list of drivers
      const response = await axios.get("http://localhost:5000/api/drivers"); // Replace with your backend API endpoint
      console.log("Fetched drivers:", response.data); // Log the response data for debugging

      // Check if the data is not empty and update the state
      if (response.data && response.data.length > 0) {
        setDrivers(response.data); // Set drivers data in state
      } else {
        setDrivers([]); // Set empty array if no data is returned
      }

      setLoading(false); // Stop loading once data is fetched
    } catch (error) {
      console.error("Error fetching drivers:", error); // Log any errors that occur during the fetch
      setLoading(false); // Stop loading on error
    }
  };

  // Fetch drivers when the component is mounted
  useEffect(() => {
    fetchDrivers(); // Call fetchDrivers on component mount
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar /> {/* Include your Sidebar component */}

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">Available Drivers</h1>

        {loading ? (
          <div>Loading...</div> // Show loading message while fetching data
        ) : (
          <div>
            {drivers.length === 0 ? (
              <p>No drivers available at the moment.</p> // If no drivers are available
            ) : (
              <div className="space-y-4">
                {drivers.map((driver) => (
                  <div key={driver.id} className="border p-4 rounded-md bg-white shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">{driver.name}</h3>
                    <p className="text-gray-600">Phone: {driver.phone}</p>
                    <p className="text-gray-600">Location: {driver.location}</p>
                    <p className="text-gray-600">
                      Availability: {driver.availability ? "Available" : "Not Available"}
                    </p>

                    {/* Button to assign driver if available */}
                    {driver.availability ? (
                      <Link to={`/assign/${driver.id}`}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all">
                          Assign Driver
                        </button>
                      </Link>
                    ) : (
                      <button className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-not-allowed">
                        Not Available
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drives;
