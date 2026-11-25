import React from 'react'
import Navabr from '../Navbar/Navabr'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layaout() {
  return (
    <>
     <Navabr/>

     <main className='mt-15 min-h-screen'>
        <Outlet/>
     </main>

     <Footer/>
    </>
  )
}
