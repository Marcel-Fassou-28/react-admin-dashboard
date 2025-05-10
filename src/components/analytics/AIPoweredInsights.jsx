import { motion } from "framer-motion"
import { ShoppingCart, TrendingDown, TrendingUp, Users } from "lucide-react"

const INSIGHTS = [
    {
        icon: TrendingUp,
        color: "text-green-500",
        insights: "Revenue is up 15% compared to last month, driven primarily by a successful email campagn.",
    },
    {
    icon: TrendingDown,
    color: "text-red-500",
    insights: "Customer retention dropped by 5% this week; consider reviewing onboarding flows."
  },
  {
    icon: Users,
    color: "text-blue-500",
    insights: "New user sign-ups increased by 20% following the latest product update."
  },
  {
    icon: ShoppingCart,
    color: "text-yellow-500",
    insights: "Cart abandonment rate decreased by 10% after UX improvements on the checkout page."
  },
]

function AIPoweredInsights() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 1.6}}
    >
      <h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
      <div className="space-y-4">
        {INSIGHTS.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
                    <item.icon className={`h-6 w-6 ${item.color}`}/>
                </div>
                <p className="text-gray-300">{item.insights}</p>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default AIPoweredInsights
