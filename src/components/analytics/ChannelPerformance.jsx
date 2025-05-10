import { motion } from 'framer-motion'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const CHANNEL_DATA = [
    {name: "Organic Search", value: 4000},
    {name: "Paid Search", value: 3000},
    {name: "Direct", value: 2000},
    {name: "Social Media", value: 1000},
    {name: "Referral", value: 1500},
    {name: "Email", value: 1500},
]

const COLORS = ["#8884d8", "#b2ca9d", "#ffc658", "#ff8042", "#0088fe", "#00c49f"]

function ChannelPerformance() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.3}}
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Channel Performance</h2>
        <div style={{with: "100%", height: 300}}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                    data={CHANNEL_DATA}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                    {CHANNEL_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4b5563"}} itemStyle={{color: "#e5e7eb"}} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
      
    </motion.div>
  )
}

export default ChannelPerformance
