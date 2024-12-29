import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa"; // Import search and filter icons
import Sidebar from "./Sidebar";

const Overview = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [selectedItem, setSelectedItem] =  useState('overview');
  const [searchTerm, setSearchTerm] = useState(""); // State for search
  const [filterDate, setFilterDate] = useState(""); // State for filter by date
  const [selectedDateOrders, setSelectedDateOrders] = useState([]); // To store orders for selected date

  // Dummy data for recent orders
  const recentOrders = [
    {
      orderId: "ORD001",
      driverName: "John Doe",
      driverId: "DR001",
      paymentMode: "Online",
      price: "₹1200",
      pickupTime: "2024-12-29 10:00 AM",
      orderStatus: "Delivered",
    },
    {
      orderId: "ORD002",
      driverName: "Alice Smith",
      driverId: "DR002",
      paymentMode: "Cash",
      price: "₹1500",
      pickupTime: "2024-12-29 11:00 AM",
      orderStatus: "Pending",
    },
    {
      orderId: "ORD003",
      driverName: "Bob Brown",
      driverId: "DR003",
      paymentMode: "Online",
      price: "₹900",
      pickupTime: "2024-12-29 12:00 PM",
      orderStatus: "Cancelled",
    },
    {
      orderId: "ORD004",
      driverName: "Emma Wilson",
      driverId: "DR004",
      paymentMode: "Cash",
      price: "₹1300",
      pickupTime: "2024-12-28 09:30 AM",
      orderStatus: "Delivered",
    },
    {
      orderId: "ORD005",
      driverName: "Chris Taylor",
      driverId: "DR005",
      paymentMode: "Online",
      price: "₹1100",
      pickupTime: "2024-12-28 03:00 PM",
      orderStatus: "Pending",
    },
  ];

  // Handle search term input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle date filter change
  const handleDateFilter = (event) => {
    setFilterDate(event.target.value);
    filterOrdersByDate(event.target.value);
  };

  // Filter orders based on the selected date
  const filterOrdersByDate = (date) => {
    const filteredOrders = recentOrders.filter(
      (order) => order.pickupTime.includes(date)
    );
    setSelectedDateOrders(filteredOrders);
  };

  // Filtered orders based on search and date filter
  const filteredOrders = recentOrders.filter((order) => {
    return (
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.driverName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="flex">
      <Sidebar   isDashboardOpen={isDashboardOpen}
        setIsDashboardOpen={setIsDashboardOpen}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        />
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center">
          {/* Search bar */}
          <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
          <div className="relative">
            <input
              type="text"
              className="mr-10 pl-10 pr-4 py-2 border rounded-md"
              placeholder="Search Orders"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute left-3 top-2 text-gray-500 mt-1" />
          </div>
        </div>

        {/* Cards for Today, This Week, This Month */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {["Today", "This Week", "This Month"].map((period) => (
            <div className="bg-white p-6 rounded-lg shadow-md" key={period}>
              <h2 className="text-xl font-bold text-gray-700">{period}</h2>
              <p className="mt-2 text-gray-600">Total revenue earned</p>
              <p className="text-2xl font-bold text-gray-800">₹5000</p>
              <p className="mt-4 text-gray-500">Planned amount for {period}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards for Deliveries, Orders, etc. */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {[
            { label: "Deliveries", value: "120", bgColor: "bg-blue-500" },
            { label: "Cancelled Orders", value: "5", bgColor: "bg-red-500" },
            { label: "Pending Orders", value: "15", bgColor: "bg-yellow-500" },
            { label: "Total Orders", value: "150", bgColor: "bg-gray-500" },
          ].map(({ label, value, bgColor }) => (
            <div className={`${bgColor} p-6 rounded-lg shadow-md text-white`} key={label}>
              <h2 className="text-xl font-bold">{label}</h2>
              <p className="text-3xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Recent Orders Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-700">Recent Orders</h2>
            {/* Filter by Date */}
            <div className="flex items-center">
              <input
                type="date"
                className="p-2 border rounded-md"
                onChange={handleDateFilter}
              />
              <button className="ml-2 p-2 bg-blue-500 text-white rounded-md">
                <FaFilter className="mr-2" />
                Filter
              </button>
            </div>
          </div>

          {/* Table for Recent Orders */}
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Delivery Driver</th>
                <th className="px-4 py-2 text-left">Driver ID</th>
                <th className="px-4 py-2 text-left">Payment Mode</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Pickup Time</th>
                <th className="px-4 py-2 text-left">Order Status</th>
              </tr>
            </thead>
            <tbody>
              {(filterDate ? selectedDateOrders : filteredOrders).map((order) => (
                <tr key={order.orderId} className="border-b">
                  <td className="px-4 py-2">{order.orderId}</td>
                  <td className="px-4 py-2">{order.driverName}</td>
                  <td className="px-4 py-2">{order.driverId}</td>
                  <td className="px-4 py-2">{order.paymentMode}</td>
                  <td className="px-4 py-2">{order.price}</td>
                  <td className="px-4 py-2">{order.pickupTime}</td>
                  <td className="px-4 py-2">{order.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
