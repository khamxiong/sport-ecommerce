import React from 'react'
import  {productData} from '../helpers/index'
import ProductCard from '../components/ProductCard'
const Home = () => {
    console.log(productData)
  return (
    <div className=' min-h-screen bg-[#D9D9D9] px-[10%] py-4'>
           <div className='w-full grid grid-cols-4 gap-4'>
               {productData?.map((item) => (
                  <ProductCard key={item.id} prodcut={item} />
               ))}
           </div>
    </div>
  )
}

export default Home
