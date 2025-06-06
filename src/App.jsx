import { Route, Routes } from 'react-router-dom'

import OverviewPage from './pages/OverviewPage'
import ProductsPage from './pages/ProductsPage'

import Sidebar from './components/common/Sidebar'
import UsersPage from './pages/UsersPage'
import SalesPage from './pages/SalesPage'
import OrderPage from './pages/OrderPage'
import AnalyticPage from './pages/AnalyticPage'
import SettingPage from './pages/SettingPage'

function App() {
  return (
    <div className='flex h-screen bg-gray-900 overflow-hidden'>
      
      {/* Background */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm'/>
      </div>
      <Sidebar />
      <Routes>
        <Route path='/' element={<OverviewPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/sales' element={<SalesPage />} />
        <Route path='/orders' element={<OrderPage />} />
        <Route path='/analytics' element={<AnalyticPage />} />
        <Route path='/settings' element={<SettingPage />} />
      </Routes>
    </div>
  )
}

export default App
