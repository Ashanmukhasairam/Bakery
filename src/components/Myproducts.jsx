import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import {
    FaStar, FaStarHalf
  } from 'react-icons/fa'
const Myproducts = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState('myproducts')
  const [products, setProducts] = useState([])

  const { bakery } = useContext(UserContext)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const backendurl = import.meta.env.VITE_BACKEND_URL
        console.log('Backendurl',backendurl)
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/bakery/getProducts`,
          {
            method: 'POST',
            credentials: "include"
          }
        )
        console.log(response)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [bakery])

  console.log(products)

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const handleIncreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, availability: product.availability + 1 }
          : product
      )
    )
  }

  const handleDecreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.availability > 0
          ? { ...product, availability: product.availability - 1 }
          : product
      )
    )
  }

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: 'New Cake',
      description: 'Description of the new cake.',
      price: '$0',
      image: 'https://via.placeholder.com/150',
      theme: 'New',
      availability: 0, // Initially set the availability to 0
      rating: 4,
    }
    setProducts([...products, newProduct])
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <FaStar key={i} className="text-yellow-500" />
        )
      } else if (i < rating + 0.5) {
        stars.push(
          <FaStarHalf key={i} className="text-yellow-500" />
        )
      } else {
        stars.push(
          <FaStar key={i} className="text-gray-500" />
        )
      }
    }
    return stars
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isDashboardOpen={isDashboardOpen}
        setIsDashboardOpen={setIsDashboardOpen}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />

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
                key={product.id} // Ensure each product has a unique key
                className="w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-all hover:opacity-80"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 truncate overflow-hidden whitespace-nowrap h-7">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-orange-500 mb-4">
                    Theme: {product.theme}
                  </p>
                  <p className="text-lg font-bold text-gray-800">
                    {product.price}
                  </p>
                <div className="flex items-center mb-4">
                    {renderStars(product.rating)}
                </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  )
}

export default Myproducts
