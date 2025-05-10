import { color, motion } from 'framer-motion'
import { LineChart, Line, YAxis, ResponsiveContainer, CartesianGrid, XAxis, Tooltip, Legend, BarChart, Bar } from 'recharts'

const USER_ACTIVITY_DATA = [
  { name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
  { name: "Tue", "0-4": 15, "4-8": 35, "8-12": 55, "12-16": 75, "16-20": 95, "20-24": 25 },
  { name: "Wed", "0-4": 18, "4-8": 38, "8-12": 58, "12-16": 78, "16-20": 98, "20-24": 28 },
  { name: "Thu", "0-4": 22, "4-8": 42, "8-12": 62, "12-16": 82, "16-20": 102, "20-24": 32 },
  { name: "Fri", "0-4": 25, "4-8": 45, "8-12": 65, "12-16": 85, "16-20": 105, "20-24": 35 },
  { name: "Sat", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
  { name: "Sun", "0-4": 28, "4-8": 48, "8-12": 68, "12-16": 88, "16-20": 108, "20-24": 38 }
]

function UserActivityHeatmap() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.4}}
    >
        <h2 className='text-xl font-semibold mb-4 text-gray-100'>User Activity Heatmap</h2>
        <div style={{width:"100%", height: 300}}>
            <ResponsiveContainer>
                <BarChart data={USER_ACTIVITY_DATA}>
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
                    <Legend />
                    <Bar dataKey='0-4' stackId='a' fill='#6366f1'/>
                    <Bar dataKey='4-8' stackId='a' fill='#8b5cf6'/>
                    <Bar dataKey='8-12' stackId='a' fill='#ec4899'/>
                    <Bar dataKey='12-16' stackId='a' fill='#108981'/>
                    <Bar dataKey='16-20' stackId='a' fill='#f59e0b'/>
                    <Bar dataKey='20-24' stackId='a' fill='#3bb2f6'/>
                </BarChart>

            </ResponsiveContainer>
        </div>
      
    </motion.div>
  )
}
export default UserActivityHeatmap
