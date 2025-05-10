import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Edit, Search, Trash2, Eye} from 'lucide-react'

const ORDER_DATA = [
  { id: "ORD001", customer: "Wireless Earbuds", total: 49.99, date: "2023-07-01", status: "delivered" },
  { id: "ORD002", customer: "Smart Watch", total: 129.99, date: "2023-07-02", status: "pending" },
  { id: "ORD003", customer: "Running Shoes", total: 89.99, date: "2023-07-03", status: "delivered" },
  { id: "ORD004", customer: "Desk Lamp", total: 29.99, date: "2023-07-04", status: "shipped" },
  { id: "ORD005", customer: "Bluetooth Speaker", total: 59.99, date: "2023-07-05", status: "delivered" },
  { id: "ORD006", customer: "Notebook", total: 4.99, date: "2023-07-06", status: "delivered" },
  { id: "ORD007", customer: "Backpack", total: 39.99, date: "2023-07-07", status: "pending" },
  { id: "ORD008", customer: "Water Bottle", total: 15.99, date: "2023-07-08", status: "delivered" }
];

function OrderTable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOrder, setFilteredOrder] = useState(ORDER_DATA);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase()
        setSearchTerm(term)
        const filtered = ORDER_DATA.filter((order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term))
        setFilteredOrder(filtered)
    }

  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.4}}
    >
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
            <div className="relative">
                <input 
                type="text" 
                placeholder='Search Order...'
                className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={handleSearch}
                value={searchTerm}/>
                <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
            </div>
        </div>
        <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-700'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Order ID</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Customer</th>                                                
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Total</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Status</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Date</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    {
                        filteredOrder.map(order => (
                            <motion.tr key={order.id}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.3}}>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                                    {order.id}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>{order.customer}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>{order.total.toFixed(2)}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>{order.date}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        order.status === "Delivered" 
                                        ? "bg-green-100 text-green-800" : order.status === "Processing" 
                                        ? "bg-yellow-100 text-yellow-800"
                                        : order.status === "Shipped" 
                                        ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"
                                    }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>
                                    <button className='text-indigo-400 hover:text-indigo-300 mr-2'><Eye size={18} /></button>
                                </td>
                            </motion.tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      
    </motion.div>
  )
}
export default OrderTable
