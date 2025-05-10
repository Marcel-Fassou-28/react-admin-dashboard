import React from 'react'
import { color, motion } from 'framer-motion'
import { LineChart, Line, YAxis, ResponsiveContainer, CartesianGrid, XAxis, Tooltip } from 'recharts'

const salesData = [
  { name: "Jan", sales: 3100 },
  { name: "Feb", sales: 2900 },
  { name: "Mar", sales: 3400 },
  { name: "Apr", sales: 3600 },
  { name: "May", sales: 4100 },
  { name: "Jun", sales: 3900 },
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 4500 },
  { name: "Sep", sales: 3800 },
  { name: "Oct", sales: 4700 },
  { name: "Nov", sales: 4400 },
  { name: "Dec", sales: 4900 }
];

function SalesOverviewChart() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.2}}
    >
      <h2
      className='text-lg font-medium mb-4 text-gray-100'
      >Sales Overview</h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={salesData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#4b5563' />
                <XAxis dataKey={"name"} stroke='#9ca3af'/>
                <YAxis stroke='#9ca3af'/>
                <Tooltip
                	contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#9ca3af"}}
                    itemStyle={{color: "#e5e7eb"}}/>
                	<Line 
                    	type='monotone'
                    	dataKey='sales'
                    stroke='#6366f1'
                    strokeWidth={3}
                    dot={{file: '#6366f1', strokeWidth: 2, r: 6}}
                    activeDot={{r: 8, strokeWidth: 2}}/>
            </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default SalesOverviewChart
