import React, { useEffect, useState } from 'react'
import Layout from './components/layouts/Layout'
import { APIKEY } from '@/src/API/api'
import Image from 'next/image'

function Homepg() {
    const [apiProducts, setapiProducts] = useState([])
    const fetchProducts = async () => {
         await fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((res)=>setapiProducts(res))
    }

    useEffect(() => {
        fetchProducts()
      
    },
     [])
    
  return (
    <>
    
        <Layout>
        <div className='grid grid-cols-3 items-center justify-center p-5 gap-3 w-[90%] ml-[10%] h-screen'>
        {apiProducts.map((item,id)=>{
                return (
                  
                  <div className='flex flex-col border-solid border-2 border-indigo-600 justify-evenly p-10 w-[100%] h-5/6' >
                    <div className="grid grid-rows-0 grid-flow-col gap-0 p-5 items-center justify-center ">
                    <img src={item.image} alt='image' width={95} height={95} />
                    </div>
                    <div className='flex flex-col  items-center justify-center text-2xl'> price :
                      {item.price}
                    </div >
                    <div className='flex flex-col p-5 pl-0 w-[118%]'><p className='flex flex-col'>description:</p>
                      {item.description}
                    </div>
                  </div>
                )
              })}
        </div>
        
        
        </Layout>
    </>
  )
}

export default Homepg