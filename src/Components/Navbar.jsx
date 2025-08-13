import React from 'react'
import { useState } from 'react'







const Navbar = () => {

    const[ showIcon, setShowIcon] = useState (false);


  return (
    <div className="navbar fixed w-full transition-all text-white ">
        <div className="container mx-auto py-4">
            <div className="navbar-box flex justify-between">
                <div className="logo flex items-center gap-5 text-3xl">
                    <h1>Ahmad Zaki Fitra</h1>
                </div>
               
                <ul className="flex items-center justify-center lg:gap-12 gap-8">
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
                <div className="social flex items-center gap-5">
                {/* <div className="social-box px-5 mt-5 flex items-center justify-center w-30 h-9 text-center rounded-full bg-gray-500 hover:bg-gray-600">
                    <a href="#" className="social">Social</a>
                </div> */}
                <div className="icon ">
                  <a href="http://facebook.com" target="_blank" rel="noopener noreferer" className="hover:scale-125 transition-transform"> <i className="facebook ri-facebook-circle-fill px-4 text-white text-3xl"></i></a> 
                  <a href="http://instagram.com" target="_blank" rel="noopener noreferer" className="hover:scale-125 transition-transform"> <i className="facebook ri-instagram-fill px-4 text-white text-3xl"></i></a> 
                  <a href="http://linkedin.com" target="_blank" rel="noopener noreferer" className="hover:scale-125 transition-transform"> <i className="facebook ri-linkedin-fill px-4 text-white text-3xl"></i></a> 
                  <a href="http://youtube.com" target="_blank" rel="noopener noreferer" className="hover:scale-125 transition-transform"> <i className="facebook ri-youtube-fill px-4 text-white text-3xl"></i></a> 
                </div>
                </div>
                </div>
            
        </div>
    </div>
  )
}

export default Navbar