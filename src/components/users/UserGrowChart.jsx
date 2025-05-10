import { color, motion } from 'framer-motion'
import { LineChart, Line, YAxis, ResponsiveContainer, CartesianGrid, XAxis, Tooltip, Legend } from 'recharts'

const USER_GROWTH_DATA = [
  { month: "Jan", users: 3100 },
  { month: "Feb", users: 2900 },
  { month: "Mar", users: 3400 },
  { month: "Apr", users: 3600 },
  { month: "May", users: 4100 },
  { month: "Jun", users: 5900 }
];

function UserGrowChart() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.2}}
    >
      <h2 className='text-xl font-semibold mb-4 text-gray-100'>User Growth</h2>
      <div style={{width:"100%", height: 300}}>
        <ResponsiveContainer>
            <LineChart data={USER_GROWTH_DATA}>
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
            	<Line type='monotone' dataKey='users' stroke='#8b5cf6' strokeWidth={2}/>
            </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default UserGrowChart



