import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Edit, Search, Trash2} from 'lucide-react'

const PRODUCT_DATA = [
  { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 49.99, stock: 143, sales: 1200 },
  { id: 2, name: "Running Shoes", category: "Footwear", price: 89.99, stock: 78, sales: 950 },
  { id: 3, name: "Smart Watch", category: "Electronics", price: 129.99, stock: 64, sales: 670 },
  { id: 4, name: "Water Bottle", category: "Accessories", price: 15.99, stock: 200, sales: 400 },
  { id: 5, name: "Desk Lamp", category: "Home", price: 29.99, stock: 102, sales: 520 },
  { id: 6, name: "Bluetooth Speaker", category: "Electronics", price: 59.99, stock: 89, sales: 760 },
  { id: 7, name: "Notebook", category: "Stationery", price: 4.99, stock: 500, sales: 1100 },
  { id: 8, name: "Backpack", category: "Bags", price: 39.99, stock: 150, sales: 820 }
];

function ProductTable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase()
        setSearchTerm(term)
        const filtered = PRODUCT_DATA.filter(product => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term))
        setFilteredProducts(filtered)
    }

  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb8 lg:grid-cols-4 mb-8'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
    >
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
            <div className="relative">
                <input 
                type="text" 
                placeholder='Search products...'
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
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Name</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Category</th>                                                
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Price</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Stock</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Sales</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    {
                        filteredProducts.map(product => (
                            <motion.tr key={product.id}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.3}}>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                                    <img src="https://picsum.photos/id/1/200/200" alt="" className='size-10 rounded-full' />
                                    {product.name}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>{product.category}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>{product.price.toFixed(2)}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>{product.stock}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>{product.sales}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>
                                    <button className='text-indigo-400 hover:text-indigo-300 mr-2'><Edit size={18} /></button>
                                    <button className="text-red-400 hover:text-red-300"><Trash2 size={18}/></button>
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

export default ProductTable
