import React from 'react'
import { useState } from 'react'





const Navbar = () => {
  return (
    <div className="navbar fixed w-full transition-all text-white">
        <div className="container mx-auto py-4">
            <div className="navbar-box flex justify-between">
                <div className="logo flex items-center gap-5 text-3xl ">
                    <h1>Ahmad Zaki Fitra</h1>
                </div>
               
                <ul className="flex items-center gap-5">
                    <li>
                        <a href="#" className="font-medium opacity-75">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Project</a>
                    </li>
                     <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                </div>
            
        </div>
    </div>
  )
}

export default Navbar