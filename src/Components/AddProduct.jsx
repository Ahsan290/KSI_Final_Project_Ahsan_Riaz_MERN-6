import React from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';
import check from "../assets/check.png"
import { useNavigate } from "react-router-dom";


function AddProduct() {
    const navigate = useNavigate()   

return (
<>
    <div className=" h-full w-screen ">


<div><Navbar/></div>
    <div className=' flex '><SideBar/>

        <div className='h-screen w-5/6'>

            <div className=' mt-5 ml-28 h-auto   w-4/5 bg-slate-200   shadow-gray-600 shadow-xl border border-gray-500 rounded-md'>
            <p className=' text-2xl font-bold m-5'>Add Product </p>
    

                                            
                <div className=' bg-white h-auto mb-6 w-5/6 flex   ml-20   rounded-3xl  shadow-gray-600 shadow-2xl'>
                                    

                <div className='  m-5 flex flex-col'>
                <p className=' text-xl font-bold m-3'>General </p>

                                {/* form */}
                    <div>
                    <input
                    className=" m-5 bt text-md  border-gray-400 border-b-2 "
                    type="text" placeholder='Name'
                    required/>


                    <select className=' m-3 text-md text-black border border-gray-400 rounded-md    w-44 ' name="" id="">
                    <option  value="">Proud Country Origin</option>
                    <option value="">Label 1</option>
                    <option value="">Label 2</option>
                    <option value="">Label 3</option>
                    <option value="">Label 4</option>
                    <option value="">Label 5</option>
                    </select>
                    </div>


                    <div>
                        <input 
                            className=" m-5 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder='Sku' 
                            required  />
                    </div>        

                                           

                            
                            
                        <div className=' flex'>      
                            
                            <div className=' m-5   w-28'>
                                <p className="  text-gray-400 text-lg">Refundable</p>
                            </div>

                            <div className='  h-5 mt-4 ml-6'>
                            <img src={check} alt=""  />
                            </div>

                            <div className=' ml-7  mt-4  w-52'>
                                <p className="  text-gray-400 text-lg">Locally made product</p>
                            </div>

                            <div className='  h-5 mt-4 ml-6'>
                            <img src={check} alt=""  />
                            </div>     
                        </div>


                        <div className=' '>
                            {/* <p className=' m-5'>Description</p> */}
                            {/* <div className=' ml-5  h-44 w-999px border border-black'></div> */}
                            <div className="w-[911px] h-[240px]">
                            <div className=" w-[650px] h-[200px]   border border-solid border-gray-400 ml-5" /></div>
                        </div>

                        <div className=' '>
                            <p className=' m-5'>Additional Information</p>
                            {/* <div className=' ml-5  h-44 w-999px border border-black'></div> */}
                            <div className="w-[911px] h-[240px]">
                            <div className=" w-[650px] h-[200px]   border border-solid border-gray-400 ml-5" /></div>
                        </div>



                    
                            
                                
                    </div> 
                </div>
                                       

                                <div className=' flex justify-end m-10'>
                                    <div className=' bg-gray-600  rounded-xl w-36   flex items-center justify-center hover:bg-black'>
                                        <button className=' text-white p-1 '
                                         onClick={() => {
                                            navigate("/AddProductVariation");
                                          }}
                                        >Add Variation</button>
                                    </div>

                                    <div className=' bg-gray-600  rounded-xl w-36   ml-5 flex items-center justify-center hover:bg-black'>
                                        <button className=' text-white p-1 '
                                         onClick={() => {
                                            navigate("/InventoryManagement");
                                          }}
                                        >Submit</button>
                                    </div>
                                </div>
                                        
                                        

                
            </div>
       </div> 
    </div>
    </div> 
    </>
  )
};
export default AddProduct;
