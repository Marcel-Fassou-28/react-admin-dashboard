import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import StatCard from '../components/common/StatCard'
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react'
import UserTable from '../components/users/UserTable'
import UserGrowChart from '../components/users/UserGrowChart'
import UserActivityHeatmap from '../components/users/UserActivityHeatmap'
import UserDemographicChart from '../components/users/UserDemographicChart'

const userStats = {
    totalUsers: 152845,
    newUsersToday: 243,
    activeUsers: 98528,
    churnRate: "2.4%"
}

function UsersPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Users"/>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
		    {/* Stats */}
        <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        >
            <StatCard name="Total Users" icon={UsersIcon} value={userStats.totalUsers.toLocaleString()} color='#6366f1'/>
            <StatCard name="New Users Today" icon={UserPlus} value={userStats.newUsersToday} color='#10b981'/>
            <StatCard name="Active Users" icon={UserCheck} value={userStats.activeUsers.toLocaleString()} color='#f59e0b' />
            <StatCard name="Churn Rate" icon={UserX} value={userStats.churnRate} color='#ef4444' />

        </motion.div>
        <UserTable />

        {/* Chart */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
            <UserGrowChart />
            <UserActivityHeatmap />
            <UserDemographicChart />
        </div>
       </main>
    </div>
  )
}

export default UsersPage
