import { useState } from "react"
import { motion } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const REVENUE_DATA = [
  { month: "Jan", revenue: 4000, target: 3800 },
  { month: "Feb", revenue: 4200, target: 4000 },
  { month: "Mar", revenue: 4500, target: 4300 },
  { month: "Apr", revenue: 4700, target: 4600 },
  { month: "May", revenue: 4400, target: 4500 },
  { month: "Jun", revenue: 4800, target: 4700 },
  { month: "Jul", revenue: 5000, target: 4900 },
]

function RevenueChart() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('This Month')
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.2}}
    >
        <div className="flex items-center justify-between mb-6">
           <h2 className='text-xl font-semibold text-gray-100'>Sales Overview</h2>
           <select className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline focus:ring-2 focus:ring-blue-500'
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}>
                <option value="">This Week</option>
                <option value="">This Month</option>
                <option value="">This Quarter</option>
                <option value="">This Year</option>
           </select>
        </div>
        <div className='w-full h-80'>
            <ResponsiveContainer>
                <AreaChart data={REVENUE_DATA}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151'/>
                    <XAxis dataKey='month' stroke='#9ca3af'/>
                    <YAxis stroke='#9ca3af'/>
                    <Tooltip 
                    contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.9)", borderColor: "#4b5563"}}
                    itemStyle={{color: "#e5e7eb"}}/>
                    <Legend />
                    <Area type='monotone' dataKey='revenue' stroke='#8b5cf6' fill='#8b5cf6' fillOpacity={0.3}/>
                    <Area type='monotone' dataKey='target' stroke='#10b981' fill='#10b981' fillOpacity={0.3}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default RevenueChart
