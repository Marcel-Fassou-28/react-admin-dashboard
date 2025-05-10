import React from 'react'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import { motion } from 'framer-motion'
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'
import SalesOverviewChart from '../components/overview/SalesOverviewChart'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'
import SalesChannelChart from '../components/overview/SalesChannelChart'

function OverviewPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Overview"/>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
		{/* Stats */}
        <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        >
            <StatCard name="Total Sales" icon={Zap} value='$12,345' color='#6366f1'/>
            <StatCard name="New Users" icon={Users} value='1,345' color='#8B5CF6'/>
            <StatCard name="Total Products" icon={ShoppingBag} value='345' color='#EC4899' />
            <StatCard name="Conversion Rate" icon={BarChart2} value='12.5%' color='#108981' />
        </motion.div>

        {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <SalesOverviewChart />
            <CategoryDistributionChart />
            <SalesChannelChart />
        </div>
      </main>
    </div>
  )
}

export default OverviewPage
