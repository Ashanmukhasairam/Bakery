import { useState } from 'react'
import Sidebar from './Sidebar' // Import Sidebar component
import { Pie, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

// Registering required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const Analytics = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState('marketplace')
  // Sample Data for Pie Chart and Line Chart
  const pieData = {
    labels: [
      'Deliveries',
      'Cancelled Orders',
      'Pending Orders',
      'Total Orders',
    ],
    datasets: [
      {
        data: [120, 5, 15, 150],
        backgroundColor: ['#4CAF50', '#F44336', '#FFEB3B', '#2196F3'],
        hoverBackgroundColor: ['#81C784', '#E57373', '#FFF176', '#64B5F6'],
      },
    ],
  }

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total Orders Over Time',
        data: [150, 130, 160, 180, 200, 220, 250],
        fill: false,
        borderColor: '#2196F3',
        tension: 0.1,
      },
    ],
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
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-orange-500 mb-8">Analytics</h1>

        {/* Cards for Deliveries, Orders, etc. */}
        <div className="grid grid-cols-4 gap-6 mt-6">
          {[
            { label: 'Deliveries', value: '120', bgColor: 'bg-blue-500' },
            { label: 'Cancelled Orders', value: '5', bgColor: 'bg-red-500' },
            { label: 'Pending Orders', value: '15', bgColor: 'bg-yellow-500' },
            { label: 'Total Orders', value: '150', bgColor: 'bg-gray-500' },
          ].map(({ label, value, bgColor }) => (
            <div
              className={`${bgColor} p-6 rounded-lg shadow-md text-white`}
              key={label}
            >
              <h2 className="text-xl font-bold">{label}</h2>
              <p className="text-3xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Pie Chart */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Orders Breakdown
          </h2>
          <div className="w-full max-w-lg mx-auto">
            <Pie data={pieData} options={{ responsive: true }} />
          </div>
        </div>

        {/* Line Chart */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Orders Over Time
          </h2>
          <div className="w-full max-w-3xl mx-auto">
            <Line data={lineData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
