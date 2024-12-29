import { useState, useContext } from 'react'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import {
  FaTachometerAlt,
  FaChartBar,
  FaCreditCard,
  FaUsers,
  FaBullhorn,
  FaEnvelope,
  FaBell,
  FaRegFileAlt,
  FaCog,
  FaStore,
  FaSignOutAlt,
} from 'react-icons/fa'
import { UserContext } from '../context/UserContext'

const Sidebar = () => {
  const { logout } = useContext(UserContext)
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null) // Track selected item

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen) // Toggle dashboard section
  }

  const handleSignOut = () => {
    setSelectedItem('signout') // Set the clicked item as selected
    logout()
  }

  const handleItemClick = (item) => {
    setSelectedItem(item) // Set the clicked item as selected
  }

  return (
    <div className="w-64 bg-white shadow-lg rounded-md m-2 flex flex-col h-screen overflow-y-auto">
      {/* Logo + Name */}
      <div className="flex justify-center items-center p-4 border-b border-gray-200">
        <span className="text-xl font-bold text-gray-800">FROSTIQ</span>
      </div>

      <ul className="mt-4 flex-grow">
        {/* Dashboard with Toggle */}
        <li
          className={`py-2 px-4 flex items-center cursor-pointer group rounded-md ${
            selectedItem === 'dashboard' ? 'bg-orange-500 text-white' : ''
          }`}
          onClick={() => handleItemClick('dashboard')}
        >
          <FaTachometerAlt className="mr-4 w-5 h-5" />
          <span className="flex-1">Dashboard</span>
          <span onClick={toggleDashboard}>{isDashboardOpen ? '▲' : '▼'}</span>
        </li>
        {isDashboardOpen && (
          <ul className="ml-8">
            <li
              className={`py-2 px-2 flex items-center cursor-pointer rounded-md ${
                selectedItem === 'overview' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handleItemClick('overview')}
            >
              <Link to="/overview" className="flex items-center">
                <FaChartBar className="mr-4 w-5 h-5" />
                <span>Overview</span>
              </Link>
            </li>
            <li
              className={`py-2 px-2 flex items-center cursor-pointer rounded-md ${
                selectedItem === 'orders' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handleItemClick('orders')}
            >
              <Link to="/orders" className="flex items-center">
                <FaCreditCard className="mr-4 w-5 h-5" />
                <span>Orders</span>
              </Link>
            </li>
          </ul>
        )}

        <li
          className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
            selectedItem === 'marketplace' ? 'bg-orange-500 text-white' : ''
          }`}
          onClick={() => handleItemClick('marketplace')}
        >
          <Link to="/marketplace" className="flex items-center">
            <FaStore className="mr-4 w-5 h-5" />
            <span>Marketplace</span>
          </Link>
        </li>

        <li
          className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
            selectedItem === 'myproducts' ? 'bg-orange-500 text-white' : ''
          }`}
          onClick={() => handleItemClick('marketplace')}
        >
          <Link to="/myproducts" className="flex items-center">
            <FaStore className="mr-4 w-5 h-5" />
            <span>My Products</span>
          </Link>
        </li>


        {/* Other Sidebar Options */}
        <li
          className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
            selectedItem === 'analytics' ? 'bg-orange-500 text-white' : ''
          }`}
          onClick={() => handleItemClick('analytics')}
        >
          <Link to="/analytics" className="flex items-center">
            <FaChartBar className="mr-4 w-5 h-5" />
            <span>Analytics</span>
          </Link>
        </li>
        <li
          className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
            selectedItem === 'payments' ? 'bg-orange-500 text-white' : ''
          }`}
          onClick={() => handleItemClick('payments')}
        >
          <Link to="/payments" className="flex items-center">
            <FaCreditCard className="mr-4 w-5 h-5" />
            <span>Payments</span>
          </Link>
        </li>
        <li
          className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
            selectedItem === 'drivers' ? 'bg-orange-500 text-white' : ''
          }`}
          onClick={() => handleItemClick('drivers')}
        >
          <Link to="/drivers" className="flex items-center">
            <FaUsers className="mr-4 w-5 h-5" />
            <span>Drivers</span>
          </Link>
        </li>
        <li
          className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
            selectedItem === 'advertising' ? 'bg-orange-500 text-white' : ''
          }`}
          onClick={() => handleItemClick('advertising')}
        >
          <Link to="/advertising" className="flex items-center">
            <FaBullhorn className="mr-4 w-5 h-5" />
            <span>Advertising</span>
          </Link>
        </li>
        <li
          className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
            selectedItem === 'messages' ? 'bg-orange-500 text-white' : ''
          }`}
          onClick={() => handleItemClick('messages')}
        >
          <Link to="/messages" className="flex items-center">
            <FaEnvelope className="mr-4 w-5 h-5" />
            <span>Messages</span>
          </Link>
        </li>
        <li
          className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
            selectedItem === 'notifications' ? 'bg-orange-500 text-white' : ''
          }`}
          onClick={() => handleItemClick('notifications')}
        >
          <Link to="/notifications" className="flex items-center">
            <FaBell className="mr-4 w-5 h-5" />
            <span>Notifications</span>
          </Link>
        </li>
      </ul>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Bottom Buttons */}
      <div className="p-4">
        <ul>
          <li
            className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
              selectedItem === 'signout' ? 'bg-orange-500 text-white' : ''
            }`}
            onClick={() => handleSignOut()}
          >
            <Link to="/report" className="flex items-center">
              <FaSignOutAlt className="mr-4 w-5 h-5" />
              <span>Logout</span>
            </Link>
          </li>
          <li
            className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
              selectedItem === 'report' ? 'bg-orange-500 text-white' : ''
            }`}
            onClick={() => handleItemClick('report')}
          >
            <Link to="/report" className="flex items-center">
              <FaRegFileAlt className="mr-4 w-5 h-5" />
              <span>Report</span>
            </Link>
          </li>
          <li
            className={`py-2 px-4 flex items-center cursor-pointer rounded-md ${
              selectedItem === 'settings' ? 'bg-orange-500 text-white' : ''
            }`}
            onClick={() => handleItemClick('settings')}
          >
            <Link to="/settings" className="flex items-center">
              <FaCog className="mr-4 w-5 h-5" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
