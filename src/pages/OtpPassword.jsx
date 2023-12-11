// import React from 'react';
// import axios from 'axios';
import logo from "../assets/1.png"
import { useNavigate } from "react-router-dom";

function OtpPassword() {
  const navigate = useNavigate()   

  return (
    <>

    
      

      <div className="bg-gray-200 h-screen w-screen text-black flex ">
        <div className="ml-20"><img src={logo} alt="" width="77%" /></div>

        <div className="bg-white mt-40 w-80 h-80 flex items-center justify-center  shadow-2xl shadow-black rounded-2xl">
          
          <div className="flex flex-col ">


            <h1 className="  text-3xl text-black font-bold flex justify-center">Forget Password</h1>
           
            <input
              className=" mt-5 bt text-xl border-gray-600 border rounded-md" 
              type="text" placeholder='OTP'
              required/>

            <input
              className="mt-3 text-xl border-gray-600 border rounded-md"
              type="password" placeholder='New Password'
              required/>

              <input
                className="mt-3  text-xl border-gray-600 border rounded-md"
                type="password" placeholder='Confirm Password'
                 required/>

            {/* <p className="text-sm pt-5">Forget passwod &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign-up</p> */}


            <button className="text-xl m-5 bg-black text-white rounded-full w-50"
            onClick={() => {
              navigate("/");
            }}
            >
             Login

            </button>
          </div>
          </div>

          
        </div>
      
    </>
  )
}
export default OtpPassword;