import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react'
import DailyOrderChart from '../components/orders/DailyOrderChart'
import OrderDistribution from '../components/orders/OrderDistribution'
import OrderTable from '../components/orders/OrderTable'
const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765"
}

function OrderPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Orders"/>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
		{/* Stats */}
        <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        >
            <StatCard name="Total Orders" icon={ShoppingBag} value={orderStats.totalOrders} color='#6366f1'/>
            <StatCard name="Pending Orders" icon={Clock} value={orderStats.pendingOrders} color='#8B5CF6'/>
            <StatCard name="Complete Orders" icon={CheckCircle} value={orderStats.completedOrders} color='#EC4899' />
            <StatCard name="Total Revenue" icon={DollarSign} value={orderStats.totalRevenue} color='#108981' />
        </motion.div>

        {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
            <DailyOrderChart />
            <OrderDistribution />
        </div>
        <OrderTable />
      </main>
    </div>
  )
}

export default OrderPage
