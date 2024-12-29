import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import MarketPlace from './components/MarketPlace'
import OrderProcess from './components/OrderProcess'
import Overview from './components/Overview'
import Login from './components/login'
import SignupPage from './components/signup'
import Myproducts from './components/Myproducts'
import Orders from './components/Orders'
import Newitem from './components/Newitem';
import Drivers from './components/Drivers';
import Reports from './components/Reports';
import Settings from './components/Settings';
import Analytics from './components/Analytics';
import Messages from './components/Messages';



<Route path="/analytics" element={<Analytics />} />

const App = () => {
  const { isAuthenticated } = useContext(UserContext)

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <div className="p-6">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/overview" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/overview" /> : <Login />
              }
            />
            <Route
              path="/signup"
              element={
                isAuthenticated ? <Navigate to="/overview" /> : <SignupPage />
              }
            />
            <Route
              path="/overview"
              element={
                isAuthenticated ? <Overview /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/marketplace"
              element={
                isAuthenticated ? <MarketPlace /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/order-process"
              element={
                isAuthenticated ? <OrderProcess /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/orders"
              element={isAuthenticated ? <Orders /> : <Navigate to="/login" />}
            />
            <Route
              path="/myproducts"
              element={
                isAuthenticated ? <Myproducts /> : <Navigate to="/login" />
              }
            />
            <Route
              path="*"
              element={
                isAuthenticated ? (
                  <Navigate to="/overview" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          <Route
  path="/analytics"
  element={isAuthenticated ? <Analytics /> : <Navigate to="/login" />}
/>
<Route
  path="/drivers"
  element={
    isAuthenticated ?<Drivers /> : <Navigate to="/login" />
    
  }
/>
<Route
  path="/reports"
  element={
    isAuthenticated ? <Reports /> :
      <Navigate to="/login" />
  }
/>
<Route
  path="/newitem"
  element={
    isAuthenticated ? <Newitem /> : 
      <Navigate to="/login" />
  }
/>
<Route
  path="/settings"
  element={
    isAuthenticated ? 
        <Settings /> : <Navigate to="/login" />

    
  }
/>
<Route 
path="/messages"
element={
  isAuthenticated ?
  <Messages /> : <Navigate to="/login"/>
}
/>


          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
