import { color, motion } from 'framer-motion'
import { LineChart, Line, YAxis, ResponsiveContainer, CartesianGrid, XAxis, Tooltip } from 'recharts'


const USER_RETENTION_DATA = [
  { name: "Week 1", retention: 100 },
  { name: "Week 2", retention: 75 },
  { name: "Week 3", retention: 60 },
  { name: "Week 4", retention: 50 },
  { name: "Week 5", retention: 45 },
  { name: "Week 6", retention: 40 },
  { name: "Week 7", retention: 35 },
  { name: "Week 8", retention: 30 }
]

function UserRetentionPerformance() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.5}}
    >
      <h2
      className='text-lg font-medium mb-4 text-gray-100'
      >User Retention</h2>
      <div style={{width:"100%", height: 300}}>
        <ResponsiveContainer>
            <LineChart data={USER_RETENTION_DATA}>
                <CartesianGrid strokeDasharray='3 3' stroke='#4b5563' />
                <XAxis dataKey={"name"} stroke='#9ca3af'/>
                <YAxis stroke='#9ca3af'/>
                <Tooltip
                	contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#9ca3af"}}
                    itemStyle={{color: "#e5e7eb"}}/>
                	<Line 
                    	type='monotone'
                    	dataKey='retention'
                    stroke='#8b5cf6'
                    strokeWidth={2}/>
            </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default UserRetentionPerformance
