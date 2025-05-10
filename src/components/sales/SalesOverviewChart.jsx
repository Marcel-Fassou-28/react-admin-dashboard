import React, { useState } from 'react'
import { color, motion } from 'framer-motion'
import { LineChart, Line, YAxis, ResponsiveContainer, CartesianGrid, XAxis, Tooltip, AreaChart, Area } from 'recharts'

const salesData = [
  { month: "Jan", sales: 3100 },
  { month: "Feb", sales: 2900 },
  { month: "Mar", sales: 3400 },
  { month: "Apr", sales: 3600 },
  { month: "May", sales: 4100 },
  { month: "Jun", sales: 3900 }
];

function SalesOverviewChart() {
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
                <AreaChart data={salesData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151'/>
                    <XAxis dataKey='month' stroke='#9ca3af'/>
                    <YAxis stroke='#9ca3af'/>
                    <Tooltip 
                    contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.9)", borderColor: "#4b5563"}}
                    itemStyle={{color: "#e5e7eb"}}/>
                    <Area type='monotone' dataKey='sales' stroke='#8b5cf6' fill='#8b5cf6' fillOpacity={0.3}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesOverviewChart
