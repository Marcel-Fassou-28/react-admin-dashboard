import { motion } from "framer-motion"
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts"


const CUSTOMER_SEGMENTATION_DATA = [
  { subject: "Engagement", A: 120, B: 100, fullMark: 150 },
  { subject: "Conversion", A: 98, B: 130, fullMark: 150 },
  { subject: "Retention", A: 86, B: 90, fullMark: 150 },
  { subject: "Satisfaction", A: 99, B: 85, fullMark: 150 },
  { subject: "Activity", A: 100, B: 95, fullMark: 150 },
  { subject: "Growth", A: 110, B: 105, fullMark: 150 }
]

function CustomerSegmentation() {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md shadow-lg p-6 rounded-xl border border-gray-700'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.6}}
    >
      <h2 className='text-xl font-semibold text-gray-100 mb-4'>Customer Segmentation</h2>
      <div style={{width: "100%", height: 300}}>
        <ResponsiveContainer>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={CUSTOMER_SEGMENTATION_DATA}>
                <PolarGrid stroke="#374151"/>
                <PolarAngleAxis dataKey='subject' stroke="#9ca3af" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9ca3af" />
                <Radar name="Segment A" dataKey='A' stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6}/>
                <Radar name="Segment B" dataKey='B' stroke="#10b981" fill="#10b981" fillOpacity={0.6}/>
                <Legend />
                <Tooltip contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4b5563"}} itemStyle={{color: "e5e7eb"}}/>
            </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default CustomerSegmentation
