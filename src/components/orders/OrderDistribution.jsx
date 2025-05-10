import { motion } from 'framer-motion'
import { Cell, Legend, Pie, ResponsiveContainer, Tooltip, PieChart} from 'recharts';


const ORDER_STATUS_DATA = [
    {name: "Pending", value: 30},
    {name: "Processing", value: 45},
    {name: "Shipped", value: 60},
    {name: "Delivered", value: 120}
]

const COLORS = ['#ff6b6b', '#4ecdc4', "#45b701", "#fed766", "#2ab7ca"]

function OrderDistribution() {
  return (
      <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.2}}
      >
        <h2 className='text-xl font-semibold mb-4 text-gray-100'>Order Status Distribution</h2>
        <div style={{width: "100%", height: 300}}>
          <ResponsiveContainer >
                <PieChart>
              <Pie
                data={ORDER_STATUS_DATA}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill='#8884d8'
                dataKey='value'
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
              {ORDER_STATUS_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
              <Tooltip contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#9ca3af"}} itemStyle={{color: "#e5e7eb"}} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    )
}

export default OrderDistribution
