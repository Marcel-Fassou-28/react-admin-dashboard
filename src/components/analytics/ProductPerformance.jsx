import { motion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const PRODUCT_PERFORMANCE_DATA = [
  { name: "Product A", sales: 1000, revenue: 2400, profit: 2400 },
  { name: "Product B", sales: 3000, revenue: 2210, profit: 2000 },
  { name: "Product C", sales: 2000, revenue: 1800, profit: 1600 },
  { name: "Product D", sales: 2780, revenue: 2500, profit: 2300 },
  { name: "Product E", sales: 1890, revenue: 1700, profit: 1500 },
  { name: "Product F", sales: 2390, revenue: 2100, profit: 1900 },
  { name: "Product G", sales: 3490, revenue: 3000, profit: 2700 }
];

function ProductPerformance() {

  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.4}}
    >
    <h2 className='text-xl font-semibold text-gray-100 mb-4'>Product Performance</h2>
    <div style={{width: "100%", height: 300}}>
        <ResponsiveContainer>
            <BarChart data={PRODUCT_PERFORMANCE_DATA}>
                <CartesianGrid strokeDasharray='3 3' stroke='#374151'/>
                <XAxis dataKey='month' stroke='#9ca3af'/>
                <YAxis stroke='#9ca3af'/>
                <Tooltip 
                contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.9)", borderColor: "#4b5563"}}
                itemStyle={{color: "#e5e7eb"}}/>
                <Legend />
                <Bar dataKey="sales" fill='#8b5cf6'/>
                <Bar dataKey="revenue" fill='#10b981'/>
                <Bar dataKey="profit" fill='#f59e08'/>
            </BarChart>
        </ResponsiveContainer>
    </div>
    </motion.div>
  )
}

export default ProductPerformance
