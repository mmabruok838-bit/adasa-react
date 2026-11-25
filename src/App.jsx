import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layaout from './Componant/Layaout/Layaout'
import Home from './Componant/Home/Home'
import Contant from './Componant/Contant/Contant'
import Notfound from './Componant/Notfound/Notfound'
import Abou from './Componant/About/Abou'


function App() {
  
  let router= createBrowserRouter([
      {path:"",element:<Layaout/>,children:[
      {index:true,element:<Home/>},
      {path:"about",element:<Abou/>},
      {path:"contant",element:<Contant/>},
      {path:"*",element:<Notfound/>}
    ]}
  ])

  return (
    <>
     <RouterProvider router={router}></RouterProvider> 
    </>
  )
}

export default App
