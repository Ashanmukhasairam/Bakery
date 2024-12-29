import React from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component

const Settings = () => {
return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-orange-500 mb-8">Chef Configuration Settings</h1>

        {/* Settings Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Configure Attributes</h2>
        <form>
            {/* Example of a setting */}
            <div className="mb-4">
            <label htmlFor="attributeName" className="block text-sm font-medium text-gray-700">Attribute Name</label>
            <input
                type="text"
                id="attributeName"
                name="attributeName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter attribute name"
            />
            </div>

            {/* Additional settings can be added here */}

            <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
            Save Settings
            </button>
        </form>
        </div>
    </div>
    </div>
);
};

export default Settings;
