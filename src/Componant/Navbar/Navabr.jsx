import React from 'react'
import { NavLink , Link} from 'react-router-dom'

export default function Navabr() {
  return (
    <>
    

<nav className="bg-gray-900 fixed w-full z-20 top-0 start-0  ">
  <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
    
    <div className='flex items-center  '>
        <Link to={"contant"} className="flex flow me-4 items-center space-x-3 rtl:space-x-reverse">
       
         <span className="self-center text-xl  text-white font-semibold whitespace-nowrap">ابدأ القراءة</span>
       </Link>
       <i class="fa-solid  fa-magnifying-glass"></i>
    </div>
    
    <div className="flex items-center md:order-2">
          <div>
            <div className='text-white'>عدسة</div>
            <div className='text-amber-500'>عالم التصوير الفوتوغرافي</div>
        </div>
        <div>
            <Link to={""}>
              <i class="fa-solid fa-house"></i>
            </Link>
        </div>

    </div>
    
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
        </div>
      </div>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-base bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black  por ">
    
        <li>
          <NavLink to={"about"} className="block   py-2 px-3 text-gray-500 hover:text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">من نحن</NavLink>
        </li>
        <li>
          <NavLink to={"contant"} className="block py-2 px-3 text-gray-500 hover:text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">المدونة</NavLink>
        </li>
        <li>
          <NavLink to={"/"} className="block py-2 px-3 text-gray-500 bg-brand hover:text-white rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">الرئيسية</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}
