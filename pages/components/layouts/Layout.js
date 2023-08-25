import React  from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Layout({children}) {
  return (
   <>
<div className='flex flex-row'>
<div>
      <Navbar/>
      </div>

    <div>{children}</div></div>   
   </>
  )
}

export default Layout