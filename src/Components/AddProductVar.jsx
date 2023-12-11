import React from 'react'
import check from "../assets/check.png"
import Navbar from './Navbar';
import SideBar from './SideBar';
import { useNavigate } from "react-router-dom";


function AddProductVar() {
    const navigate = useNavigate()   

  return (

    <>
    <div className=" h-full w-screen ">


<div><Navbar/></div>
<div className=' flex '><SideBar/>

        <div className='h-screen w-5/6'>

            <div className=' mt-5 ml-28 h-auto   w-4/5 bg-slate-200   shadow-gray-600 shadow-xl border border-gray-500 rounded-md'>
                <p className=' text-2xl font-bold m-5'>Add Product Variation </p>
    

                                            
                <div className=' bg-white h-auto mb-14 w-5/6 flex   ml-20   rounded-3xl  shadow-gray-600 shadow-2xl'>
                                    

                    <div className='  m-5 flex flex-col'>
                        <p className=' text-xl font-bold m-3'>Branding </p>

                                {/* form */}
                        <div>
                            <select className=' m-3 text-md text-black border border-gray-400 rounded-xl p-3   w-44 ' name="" id="">
                            <option  value="">Brands</option>
                            <option value="">Label 1</option>
                            <option value="">Label 2</option>
                            <option value="">Label 3</option>
                            <option value="">Label 4</option>
                            <option value="">Label 5</option>
                            </select>
                        </div>


                        <div>
                        <p className=' text-xl font-bold m-3'>Pricing </p>

                    </div> 
     
                        <div className=' flex'>           
                        <input
                        className=" m-5  bt text-md bg-transparent  border-gray-500  border-b-2 w-48 "
                        type="text" placeholder='Price'
                        required/>

                            <input
                        className=" m-5 ml-5 bt text-md bg-transparent  border-gray-500  border-b-2 w-48 "
                        type="text" placeholder='Discount %'
                        required/>

                            <div className='  h-5 mt-4 ml-6'>
                            <img src={check} alt=""  />
                            </div>                               
                        </div>


                        <div>
                        <input
                        className=" m-5  bt text-md bg-transparent  border-gray-500  border-b-2 w-48 "
                        type="text" placeholder='Fee %'
                        required/>

                        <input
                        className=" m-5  bt text-md bg-transparent  border-gray-500  border-b-2 w-48 "
                        type="text" placeholder='Duty %'
                        required/>
                        </div>

                        
                        <div>
                            <p className=' text-xl font-bold m-3'>Stock Controller </p>

                        </div>

                        <div className=' flex '>

                            {/* <div className=' m-5'>     */}
                            <input className=' ml-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <p className=' ml-10'>Out of stock</p>
                            {/* </div>  */}


                            {/* <div className=' m-5'> */}
                            <input className=' ml-24' type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <p className=' ml-10'>Out of stock</p>
                            {/* </div> */}

                        </div>


                        <div className=' '>
                        <p className=' text-xl font-bold m-3'>Category </p>
                        </div>

                        <div className=' flex '>
                            <select className=' m-3 text-md text-black border border-gray-400 rounded-xl p-2   w-44 ' name="" id="">
                            <option  value="">Brands</option>
                            <option value="">Label 1</option>
                            <option value="">Label 2</option>
                            <option value="">Label 3</option>
                            <option value="">Label 4</option>
                            <option value="">Label 5</option>
                            </select>

                            <button className=' text-2xl font-bold m-3 border border-gray-400 rounded-lg h-10 w-7 flex justify-center items-center '>+</button>
                        </div>



                        
                    </div> 

                    
                    <div className=' flex justify-end items-end p-2  '>
                        <div className=' bg-black  rounded-xl w-36   flex items-center justify-center '>
                        <button className=' text-white p-1 font-semibold'
                        onClick={() => {
                            navigate("/AddProduct");
                          }}
                        >Add
                            <button className=' ml-3 w-5  bg-white text-black rounded-md '>+</button>
                        </button>
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
export default AddProductVar;
