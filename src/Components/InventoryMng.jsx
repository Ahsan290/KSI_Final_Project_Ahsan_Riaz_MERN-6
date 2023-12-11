import React from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';
import { useNavigate } from "react-router-dom";


function InventoryMng() {
    const navigate = useNavigate()   

  return (
    <>
    <div className=" h-screen w-screen bg-slate-300">


<div><Navbar/></div>
<div className=' flex'><SideBar/>

        <div className='h-screen w-5/6'>

            <div className=' mt-5 ml-28 h-auto   w-4/5    '>
    

                                                {/* div-1  */}
                    {/* <div className=' bg-white h-96 w-5/6 flex   ml-20   rounded-3xl  shadow-gray-600 shadow-2xl'> */}
                    
                        <div className='  m-20 '>

                            <div className='flex'>
                                <p className=' w-80  text-2xl font-bold'>Inventory Management </p>
                                <button className=' ml-auto w-32 border border-gray-400 text-gray-400 hover:bg-black rounded-lg shadow-lg'
                                 onClick={() => {
                                    navigate("/AddProduct");
                                  }}
                                >Add Product</button>
                            </div>
                            


                                    {/* form */}
                                    <div>
                                    <input
                                        className=" mt-10 bt text-md bg-transparent  border-gray-500  border-b-2 w-48 "
                                        type="text" placeholder='Product Name'
                                        required/>


                                    <input
                                        className=" mt-10 ml-5 bt text-md bg-transparent  border-gray-500  border-b-2 w-48 "
                                        type="text" placeholder='Suko Code'
                                        required/>
                                        </div>


                                    <div>
                                        <select className=' mt-10 text-md bg-gray-300 text-gray-400 border-gray-400 border-2 rounded-lg w-48 ' name="abc" id="" >
                                        <option value="">Catogary</option>                                
                                        </select>

                                        <select className=' m-5 mt-10 text-md bg-gray-300 text-gray-400 border-gray-400 border-2 rounded-lg w-48 ' name="" id="">
                                        <option value="">Status</option>                                
                                        </select>                   

                                        
                                        <select className=' mt-10 text-md bg-gray-300 text-gray-400 border-gray-400 border-2 rounded-lg w-44 ' name="" id="">
                                        <option value="">Availability</option>
                                        </select>
                                        
                                        <input
                                        className=" mt-5 bt text-md bg-transparent  border-gray-500  border-b-2 w-48 "
                                        type="text" placeholder='Starting Price'
                                        required/>

                                        <input
                                        className=" mt-5 ml-5 bt text-md bg-transparent  border-gray-500  border-b-2 w-48 "
                                        type="text" placeholder='Ending Price'
                                        required/>
                                        
                                    </div>

                                    <div>
                                    <input
                                                className=" mt-10  bt text-md bg-transparent  border-gray-500  border-b-2 w-48 "
                                                type="text" placeholder='Starting Quantity'
                                                required/>
                                    <input
                                                className=" mt-5 ml-5 bt text-md bg-transparent  border-gray-500  border-b-2 w-48 "
                                                type="text" placeholder='Ending Quantity'
                                                required/>                    
                                    </div>

                                <div className=' flex justify-center'>
                                    <div className=' bg-gray-600  rounded-xl w-36  m-10 flex items-center justify-center hover:bg-black'>
                                        <button className=' text-white p-1 '>Search</button>
                                    </div>

                                    <div className=' bg-gray-600  rounded-xl w-36   m-10 flex items-center justify-center hover:bg-black'>
                                        <button className=' text-white p-1 '>Reset</button>
                                    </div>
                                </div> 

                        </div> 
                    
            </div>
        </div>
    </div>
</div>
    </>
  )
};
export default InventoryMng;
