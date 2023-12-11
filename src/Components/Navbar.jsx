import React from 'react'
import logo from "../assets/2.png"
import vector from "../assets/vector.png"
import noti from "../assets/notification.png"
import goto from "../assets/go to.png"

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()

  return (
    <>
        
            <div className=' bg-white h-50 w-screen flex shadow-slate-400 shadow-2xl '>
                <img src={logo} alt="" />
                <p className='pl-52 text-3xl font-bold flex items-center '>Seller Name</p>

                    <div className=' flex justify-end items-center ml-auto space-x-4 mr-3 cursor-pointer'>
                    <img src={vector} alt=""  width="20"
                    onClick={() => {
                      navigate("/PersonalInfo");
                    }}
                    />
                    <img src={noti} alt="" width="20"/>

                    <img src={goto} alt="" width="20"
                    onClick={() => {
                      navigate("/");
                    }}
                    />
                </div>

                </div>

            


        
    </>
  )
};
export default Navbar;