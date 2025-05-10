import { motion } from 'framer-motion'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const SALES_BY_CATEGORY = [
    {name: "Electronics", value: 400},
    {name: "Clothing", value: 300},
    {name: "Home & Garden", value: 200},
    {name: "Books", value: 100},
    {name: "Others", value: 150}
]

const COLORS = ["#8884d8", "#b2ca9d", "#ffc658", "#ff8042", "#0088fe"]

function SalesByCategoryChart() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.3}}
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Sales by Category</h2>
        <div style={{with: "100%", height: 300}}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                    data={SALES_BY_CATEGORY}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                    {SALES_BY_CATEGORY.map((entry, index) => (
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

export default SalesByCategoryChart
