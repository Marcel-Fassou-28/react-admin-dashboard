import { motion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DAILY_SALES_DATA = [
  { name: "Mon", sales: 1000 },
  { name: "Tue", sales: 2900 },
  { name: "Web", sales: 900 },
  { name: "Thu", sales: 1100 },
  { name: "Fri", sales: 1300 },
  { name: "Sat", sales: 1600 },
  { name: "Sun", sales: 1400 },
];
function DailySalesTrend() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.3}}
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Daily Sales Trend</h2>
        <div style={{with: "100%", height: 300}}>
            <ResponsiveContainer>
                <BarChart data={DAILY_SALES_DATA}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis dataKey='name' stroke='#9ca3af' />
                    <YAxis stroke='#9ca3af' />
                    <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "4b5563"
                    }}
                    itemStyle={{color: "#e5e7eb"}}
                    />
                    <Bar dataKey='sales' fill='#10b981'/>
                </BarChart>

            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default DailySalesTrend
