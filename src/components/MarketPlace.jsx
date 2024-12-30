import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'

const MarketPlace = () => {
  const [costs, setCosts] = useState({})
  const { bakery } = useContext(UserContext)
  const sampleOrders = [
    {
      orderId: 'ORD001',
      orderPlacedDate: '2024-12-20',
      eventType: 'Event A',
      description: 'Customer wants a large banner.',
      cost: 0,
      image: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
      orderId: 'ORD002',
      orderPlacedDate: '2024-12-22',
      eventType: 'Event B',
      description: 'Customer needs custom printing.',
      cost: 0,
      image: 'https://via.placeholder.com/150',
    },
    {
      orderId: 'ORD003',
      orderPlacedDate: '2024-12-23',
      eventType: 'Event C',
      description: 'Customer requests gift packaging.',
      cost: 0,
      image: 'https://via.placeholder.com/150',
    },
    {
      orderId: 'ORD004',
      orderPlacedDate: '2024-12-24',
      eventType: 'Event D',
      description: 'Customer requests a custom design.',
      cost: 0,
      image: 'https://via.placeholder.com/150',
    },
  ]
  const [searchTerm, setSearchTerm] = useState('') // State for search bar
  const [orders, setOrders] = useState(sampleOrders)
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState('marketplace')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/cakerequest/available/${
            bakery._id
          }`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          }
        )
        const data = await res.json()
        setOrders(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [bakery])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleCostChange = (orderId, value) => {
    setCosts((prevCosts) => ({
      ...prevCosts,
      [orderId]: value,
    }))
  }

  const handleAccept = async (orderId) => {
    const cost = costs[orderId]
    if (!cost) return
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/marketplace/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            bakeryId: bakery._id,
            price: cost,
            cakeRequestId: orderId,
            description: orders.find((order) => order._id === orderId).description,
          }),
        }
      )
      const data = await res.json()
      console.log(data)
      console.log("Offered successfully")
    } catch (error) {
      console.log(error.message)
    }
    console.log(`Order ${orderId} offered at cost: ${cost}`)
  }

  return (
    <div className="flex">
      <Sidebar
        isDashboardOpen={isDashboardOpen}
        setIsDashboardOpen={setIsDashboardOpen}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className="flex-1 p-6 ml-64">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Marketplace</h1>
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
        <div className="mt-6">
          {orders.map((order, index) => {
            if (index % 2 === 0) {
              const nextOrder = orders[index + 1]
              return (
                <div className="flex space-x-4 mb-6" key={order._id}>
                  <div className="bg-white rounded-lg shadow-md flex-1">
                    <img
                      src={order.imageUrl}
                      alt={`Order ${order._id}`}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h2 className="text-lg font-bold text-gray-700">
                        Order ID: {order._id}
                      </h2>
                      <p className="text-sm text-gray-600">
                        Order Placed: {order.createdAt}
                      </p>
                      <p className="text-sm text-gray-600">
                        Prompt: {order.prompt}
                      </p>
                      <p className="text-sm ">
                        Description: {order.description}
                      </p>
                      <div className="mt-4 flex items-center space-x-4">
                        <input
                          type="number"
                          value={costs[order._id] || ''}
                          onChange={(e) =>
                            handleCostChange(order._id, e.target.value)
                          }
                          className="w-28 p-2 border rounded-md"
                          placeholder="Cost"
                        />
                        <button
                          onClick={() => handleAccept(order._id)}
                          className="bg-green-500 text-white px-6 py-3 rounded-md"
                        >
                          Offer
                        </button>
                      </div>
                    </div>
                  </div>
                  {nextOrder && (
                    <div
                      className="bg-white rounded-lg shadow-md flex-1"
                      key={nextOrder._id}
                    >
                      <img
                        src={nextOrder.imageUrl}
                        alt={`Order ${nextOrder._id}`}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <div className="p-6">
                        <h2 className="text-lg font-bold text-gray-700">
                          Order ID: {nextOrder._id}
                        </h2>
                        <p className="text-sm text-gray-600">
                          Order Placed: {nextOrder.createdAt}
                        </p>
                        <p className="text-sm text-gray-600">
                          Prompt: {nextOrder.prompt}
                        </p>
                        <p className="text-sm ">
                          Description: {nextOrder.description}
                        </p>
                        <div className="mt-4 flex items-center space-x-4">
                          <input
                            type="number"
                            value={costs[nextOrder._id] || ''}
                            onChange={(e) =>
                              handleCostChange(nextOrder._id, e.target.value)
                            }
                            className="w-28 p-2 border rounded-md"
                            placeholder="Cost"
                          />
                          <button
                            onClick={() => handleAccept(nextOrder._id)}
                            className="bg-green-500 text-white px-6 py-3 rounded-md"
                          >
                            Offer
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}

export default MarketPlace
