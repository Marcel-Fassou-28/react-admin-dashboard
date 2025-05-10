import React from 'react'
import { color, motion } from 'framer-motion'
import { LineChart, Line, YAxis, ResponsiveContainer, CartesianGrid, XAxis, Tooltip, Legend } from 'recharts'

const salesData = [
  { month: "Jan", sales: 3100 },
  { month: "Feb", sales: 2900 },
  { month: "Mar", sales: 3400 },
  { month: "Apr", sales: 3600 },
  { month: "May", sales: 4100 },
  { month: "Jun", sales: 3900 }
];

function SalesTrendChart() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.2}}
    >
      <h2 className='text-xl font-semibold mb-4 text-gray-100'>Sales Trend</h2>
      <div style={{width:"100%", height: 300}}>
        <ResponsiveContainer>
            <LineChart data={salesData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#4b5563' />
                <XAxis dataKey="month" stroke='#9ca3af'/>
                <YAxis stroke='#9ca3af'/>
                <Tooltip 
                    contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)", 
                        borderColor: "#4b5563",
                    }} 
                    itemStyle={{color: "#e5e7eb"}}
                />
                <Legend />
            	<Line type='monotone' dataKey='sales' stroke='#8b5cf6' strokeWidth={2}/>
            </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default SalesTrendChart


