import { useNavigate } from "react-router-dom";

import logo from "../assets/1.png"

function ForgetPassword() {
    const navigate = useNavigate()   

  return (
    <>

      <div className="bg-gray-200 h-screen w-screen text-black flex ">
        <div className="ml-20"><img src={logo} alt="" width="77%" /></div>

        <div className="bg-white mt-40 w-80 h-80 flex items-center justify-center  shadow-2xl shadow-black rounded-2xl">
          
          <div className="flex flex-col ">


            <h1 className="  text-3xl text-black font-bold flex justify-center   ">Forget Password</h1>
           
            <input
              className=" mt-10 bt text-xl  border-gray-600 border rounded-md"
              type="text" placeholder='Username'
              required/>

            <input
              className="mt-3 text-xl  border-gray-600 border rounded-md"
              type="email" placeholder='Email'
              required/>

            {/* <p className="text-sm pt-5">Forget passwod &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign-up</p> */}


            <button className="text-xl font-semibold mt-10 bg-black text-white rounded-full w-50 h-10"
            onClick={() => {
              navigate("/OtpPassword");
            }}
            >
             Submit
            </button>
            
          </div>    
          </div>

          
        </div>
      
    </>
  )
}
export default ForgetPassword;