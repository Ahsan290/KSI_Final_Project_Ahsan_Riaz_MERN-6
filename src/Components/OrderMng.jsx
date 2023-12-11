import React from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';


function OrderMng() {
  return (

    <>
    <div className=" h-screen w-screen bg-slate-300">


<div><Navbar/></div>
<div className=' flex'><SideBar/>

        <div className='h-screen w-5/6'>

            <div className=' mt-5  ml-28 h-96   w-4/5 bg-white   shadow-gray-600 shadow-xl rounded-2xl'>
                    <div className=' flex'>
                        <p className=' m-5 text-2xl font-bold'>Order Management</p>
                    </div>

                                            


            </div>
       </div> 
    </div>
    </div>   
    </>
  )
};
export default OrderMng;
