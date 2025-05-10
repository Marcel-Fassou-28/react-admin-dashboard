import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import StatCard from '../components/common/StatCard'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import SalesOverviewChart from '../components/sales/SalesOverviewChart'
import SalesByCategoryChart from '../components/sales/SalesByCategoryChart'
import DailySalesTrend from '../components/sales/DailySalesTrend'


const SALES_DATA = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%"
}

function SalesPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Sales'/>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* Sales Stats */}
        <motion.div
           className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
           initial={{opacity: 0, y: 20}}
           animate={{opacity: 1, y: 0}}
           transition={{duration: 1}}
        >
          <StatCard name='Total Revenue' icon={DollarSign} value={SALES_DATA.totalRevenue} color='#6366f1'/>
          <StatCard name='Avg. Order Value' icon={ShoppingCart} value={SALES_DATA.averageOrderValue} color='#108981'/>
          <StatCard name='Conversion Rate' icon={TrendingUp} value={SALES_DATA.conversionRate} color='#f59e0b'/>
          <StatCard name='Sales Growth' icon={CreditCard} value={SALES_DATA.salesGrowth} color='#ef4444'/>

        </motion.div>
        <SalesOverviewChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <SalesByCategoryChart />
            <DailySalesTrend />
        </div>
      </main>
    </div>
  )
}

export default SalesPage
