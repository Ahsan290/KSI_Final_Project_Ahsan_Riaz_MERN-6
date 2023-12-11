
import { useNavigate } from "react-router-dom";

import logo from "../assets/1.png"



function Signup(){

  const navigate = useNavigate()


    return(
        <>

    
      

        <div className="bg-gray-200 h-screen w-screen text-black flex ">
          <div className="ml-20"><img src={logo} alt="" width="77%" /></div>
  
          <div className="bg-white  w-80 h-100 flex items-center justify-center  shadow-2xl shadow-black ">
            
            <div className="flex flex-col  ">
  
  
                <h1 className="  text-3xl text-black font-bold flex justify-center">Sign-Up</h1>
             
                <input
              className=" mt-5 bt text-xl border-gray-600 border rounded-md" 
              type="text" placeholder='First Name'
              required/>

            <input
              className="mt-3 text-xl border-gray-600 border rounded-md"
              type="text" placeholder='Last Name'
              required/>

              <input
                className="mt-3  text-xl border-gray-600 border rounded-md"
                type="text" placeholder='User Name'
                 required/>


                  <input
                className="mt-3  text-xl border-gray-600 border rounded-md"
                type="email" placeholder='E-mail'
                 required/>


                    <input
                className="mt-3  text-xl border-gray-600 border rounded-md"
                type="password" placeholder='Password'
                 required/>



              <p className="text-black text-sm m-2">
                          Already account{" "}
                          <span
                            className="text-Black  cursor-pointer hover:font-bold   ml-16 "
                            onClick={() => {
                              navigate("/");
                            }}
                          >
                            {" "}
                            Login here
                          </span>
                        </p>              
  
              <button className="text-xl m-5 bg-black text-white rounded-full w-50 h-10"
              onClick={() => {
                navigate("/");
              }}
              >
               Sign-Up
              </button>
            </div>
            </div>
  
            
          </div>
        
      </>
    )


};
export default Signup;