import React from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';

function Perinfo() {
  return (

    <>
     <div className=" h-full w-screen ">


<div><Navbar/></div>
<div className=' flex '><SideBar/>

        <div className='h-screen w-5/6'>

            <div className=' mt-5 ml-28 h-auto   w-4/5 bg-slate-200   shadow-gray-600 shadow-xl'>
                

                                            {/* div-1  */}
                <div className=' bg-white h-96 w-5/6 flex   ml-20   rounded-3xl  shadow-gray-600 shadow-2xl'>
                
                <div className='  m-5 flex flex-col'>
                    <p className=' text-xl font-bold'>Personal Information </p>


                                {/* form */}
                                <div>
                                <input
                        className=" m-5 bt text-md  border-gray-400 border-b-2 "
                        type="text" placeholder='First Name'
                        required/>


                                <input
                        className=" mt-5 bt text-md  border-gray-400 border-b-2 "
                        type="text" placeholder='Last Name'
                        required/>
                                    </div>


                    <div>
                        <input 
                            className=" m-3 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder='Addresss Line 1' 
                            required  />

                        <input
                            className=" m-3 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder='Address Line 2'
                            required/>                    

                            {/* city */}
                            <select className=' m-3 text-md text-gray-400 border-gray-400 border-b-2 w-44 ' name="" id="">
                            <option value="">City</option>
                            <option value="">Lahore</option>
                            <option value="">Islamabad</option>
                            <option value="">Karachi</option>
                            <option value="">Multan</option>
                            <option value="">Gujrat</option>
                            <option value="">Gujrawal</option>
                            <option value="">Faislabad</option>
                            <option value="">Islamabad</option>
                            <option value="">Jehlum</option>
                            </select>
                            
                            {/* province */}
                            <select className=' m-3 text-md text-gray-400 border-gray-400 border-b-2 w-44 ' name="" id="">
                            <option value="">Province</option>
                            <option value="">Punjab</option>
                            <option value="">Sindh</option>
                            <option value="">Khyber Pakhtunkhwa</option>
                            <option value=""> Balochistan</option>
                            </select>

                            {/* Country */}
                            <select className=' m-3 text-md text-gray-400 border-gray-400 border-b-2 w-44 ' name="" id="">
                            <option value="">Country</option>
                            <option value="">Pakistan</option>
                            <option value="">India</option>
                            <option value="">Afganistan</option>
                            <option value=""> Autria</option>
                            </select>   
                    </div>

                    <div>
                        <input 
                            className=" m-3 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder='Mobile No' 
                            required  />

                        <input
                            className=" m-3 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder='DOB'
                            required/>                    

                            {/* Gender */}
                            <select className=' m-3 text-md text-gray-400 border-gray-400 border-b-2 w-44 ' name="" id="">
                            <option value="">Gender</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                            </select> 

                            </div>
                            <div className=' bg-gray-600  rounded-xl w-36  ml-auto m-10 flex items-center justify-center hover:bg-black'>
                                <button className=' text-white p-1 '>Submit</button>
                            </div>
                                
                    </div> 
                </div>
                                        {/* div-1 */}


                                        {/* div-2  */}
                <div className=' bg-white h-96 w-5/6 flex   ml-20 mt-10  rounded-3xl  shadow-gray-600 shadow-2xl'>
                
                <div className='  m-5 flex flex-col'>
                    <p className=' text-xl font-bold'>Garage Information </p>


                                {/* form */}
                        <div>
                            <input
                            className=" m-5 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder=' Name'
                            required/>


                                
                                    </div>


                    <div>
                        <input 
                            className=" m-3 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder='Addresss Line 1' 
                            required  />

                        <input
                            className=" m-3 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder='Address Line 2'
                            required/>                    

                            {/* city */}
                            <select className=' m-3 text-md text-gray-400 border-gray-400 border-b-2 w-44 ' name="" id="">
                            <option value="">City</option>
                            <option value="">Lahore</option>
                            <option value="">Islamabad</option>
                            <option value="">Karachi</option>
                            <option value="">Multan</option>
                            <option value="">Gujrat</option>
                            <option value="">Gujrawal</option>
                            <option value="">Faislabad</option>
                            <option value="">Islamabad</option>
                            <option value="">Jehlum</option>
                            </select>
                            
                            {/* province */}
                            <select className=' m-3 text-md text-gray-400 border-gray-400 border-b-2 w-44 ' name="" id="">
                            <option value="">Province</option>
                            <option value="">Punjab</option>
                            <option value="">Sindh</option>
                            <option value="">Khyber Pakhtunkhwa</option>
                            <option value=""> Balochistan</option>
                            </select>

                            

                            {/* Country */}
                            <select className=' m-3 text-md text-gray-400 border-gray-400 border-b-2 w-44 ' name="" id="">
                            <option value="">Country</option>
                            <option value="">Pakistan</option>
                            <option value="">India</option>
                            <option value="">Afganistan</option>
                            <option value=""> Autria</option>
                            </select> 

                            <input
                            className=" m-5 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder=' Pin Location'
                            required/>  
                    </div>

                    <div>
                        <input 
                            className=" m-3 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder='Mobile No ' 
                            required  />

                        <input
                            className=" m-3 bt text-md  border-gray-400 border-b-2 "
                            type="text" placeholder='Mobile No 2'
                            required/>                    

                            {/* Gender */}
                            {/* <select className=' m-3 text-md text-gray-400 border-gray-400 border-b-2 w-44 ' name="" id="">
                            <option value="">Male</option>
                            <option value="">Female</option>
                            </select>                              */}
                    </div>

                    <div className=' bg-gray-600  rounded-xl w-36  ml-auto m-10 flex items-center justify-center hover:bg-black'>
                        <button className=' text-white p-1 '>Submit</button>
                    </div>
                                
                    </div> 
                </div>
                                        {/* div-2 */}

                                        {/* div-3  */}
                <div className=' bg-white h-52 w-5/6 flex   ml-20 mt-10  rounded-3xl   shadow-gray-600 shadow-2xl'>
                
                    <div className='  m-5 flex flex-col'>
                        <p className=' text-xl font-bold'>Reset Password </p>


                                {/* form */}
                        <div>
                            <input
                            className=" m-5 bt text-md  border-gray-400 border-b-2 "
                            type="Password" placeholder='Old Password'
                            required/>


                            <input
                            className=" mt-5 bt text-md  border-gray-400 border-b-2 "
                            type="password" placeholder='New Password'
                            required/>

                            <input 
                                className=" m-3 bt text-md  border-gray-400 border-b-2 "
                                type="password" placeholder='Conform Password' 
                                required  />

                        </div>

                        <div className=' bg-gray-600  rounded-xl w-36  ml-auto  flex items-center  justify-center hover:bg-black'>
                                <button className=' text-white p-1 '>Submit</button>
                            </div>
                                                           
                    </div> 
                </div>
                                        {/* div-3 */}


            </div>
       </div>
    </div>
</div>     
    </>
  )
};
export default Perinfo;
