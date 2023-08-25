import React from 'react'
import { NavArray, Navicons } from './array/Array'
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter()
  return (
    <>
   <div className='flex flex-col gap-5 p-5  w-[8%] mt-20 fixed '>
    <div className='flex flex-col  gap-5 cursor-pointer'>
   {NavArray.map((item,id)=>{
        return (
           <div  className='flex flex-col gap-3 ' key={id}
           onClick={()=>(router.push(item.to))}
           >{item.title}</div>
        )
    }

    )}
    </div>
    <div className='flex flex-row gap-3 cursor-pointer'>
    {Navicons.map((item,id)=>{
        return (
            <div  className='flex flex-row gap-3 ' key={id}>{item.title}</div>
        )
    })}
    </div>
   </div>
    </>
  )
}

export default Navbar