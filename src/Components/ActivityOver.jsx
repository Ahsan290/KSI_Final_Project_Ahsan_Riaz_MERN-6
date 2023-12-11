import React from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';

import { useNavigate } from "react-router-dom";

function ActivityOver() {
    const navigate = useNavigate()

  return (

    <>
    <div className=" h-screen w-screen bg-slate-300">


<div><Navbar/></div>
<div className=' flex'><SideBar/> 

        <div className=' w-5/6'>

            <div className=' mt-5 ml-28 h-80 w-4/5 bg-white flex  shadow-gray-600 shadow-xl'>
                <p className=' m-5 text-2xl font-bold'>Activity Overview</p>

                <div className=' bg-white h-60 w-80 flex  ml-auto mr-10 mt-10   shadow-gray-600 shadow-2xl'>
                
                <div className=' ml-5 mt-5 flex flex-col'>
                    <p className=' text-xl font-semibold'>Sales </p>
                    <p className=' text-gray-500 text-sm font-semibold'>Total Sales : <span className=' font-bold text-black'>$</span> </p>
                    <p className=' mt-5 text-xl font-semibold'>Products </p>
                    <button className=' m-3 p-2 border-gray-400 border rounded-md text-gray-400 hover:text-gray-600'
                    onClick={() => {
                        navigate("/InventoryManagement");
                      }}
                    >View All</button>
                    <p className=' mt-5 text-sm text-gray-500 font-semibold'>Toal Products : 0 </p>

                    </div> 
                </div>
            </div>

        <div className=' mt-16 ml-28  h-28 w-4/5 flex space-x-3 '>

            <div className='bg-white w-96 h-36  shadow-gray-600 shadow-xl'>
                <p className=' m-2 font-bold text-xl'>Brands</p> 
                <button className=' ml-2 p-2 border-gray-400 border rounded-md text-gray-400 hover:text-gray-600'
                onClick={() => {
                    navigate("/Brands");
                  }}
                >View All</button>
                <p className=' m-2 text-sm text-gray-500 font-semibold'>Toal Brands : <span className=' font-bold text-black'>100</span> </p>
                 


            </div>

            <div className='bg-white w-96 h-36  shadow-gray-600 shadow-xl'>
                <p className=' m-2 font-bold text-xl'>Returns</p>
                <button className=' ml-2 p-2 border-gray-400 border rounded-md text-gray-400 hover:text-gray-600'
                onClick={() => {
                    navigate("/Returns");
                  }}
                >View All</button>
                <p className=' m-2 text-sm text-gray-500 font-semibold'>Toal Returns : <span className=' font-bold text-black'>100</span> </p>


            </div>

            <div className='bg-white w-96 h-36  shadow-gray-600 shadow-xl'>
                <p className=' m-2 font-bold text-xl'>Feedback</p>
                <button className=' ml-3 p-2 border-gray-400 border rounded-md text-gray-400 hover:text-gray-600'
                onClick={() => {
                    navigate("/Feedback");
                  }}
                >View All</button>
                <p className=' m-2 text-sm text-gray-500 font-semibold'>Feedback : <span className=' font-bold text-black'>100</span> </p>

                

            </div>
            
        </div>


       </div> 
</div>
</div>   
    </>
  )
};
export default ActivityOver;
