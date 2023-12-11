

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import OtpPassword from "./pages/OtpPassword";

import ActivityOver from "./Components/ActivityOver";
import Perinfo from "./Components/Personalinfo";
import InventoryMng from "./Components/InventoryMng";
import AddProduct from "./Components/AddProduct";
import AddProductVar from "./Components/AddProductVar";

import OrderMng from "./Components/OrderMng";
import Feedback from "./Components/Feedback";
import Returns from "./Components/Returns";
import Brands from "./Components/Brands";



import {Routes, Route} from "react-router-dom"

function App() {


  return (
    <>

    {/* <Login/>
    <Signup/>
    <ForgetPassword/>
    <OtpPassword/>

    <ActivityOverpg/>
    <Feedbackpg/>
    <Returnspg/>
    <Brandspg/>
    <OrderManagementPg/>
    <InventoryManagmentPg/>
    <AddProductVarPg/>


    <AddProductPg/>
    <PersonalInfopg/> */}
    



    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/SignUp" element={<Signup/>}/>
        <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
        <Route path="/OtpPassword" element={<OtpPassword/>}/>

        <Route path="/ActivityOverview" element={<ActivityOver/>}/>
        <Route path="/Personalinfo" element={<Perinfo/>}/>
        <Route path="/InventoryManagement" element={<InventoryMng/>}/>
        <Route path="/AddProduct" element={<AddProduct/>}/>
      <Route path="/AddProductVariation" element={<AddProductVar/>}/>


        <Route path="/OrderManagement" element={<OrderMng/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
        <Route path="/Brands" element={<Brands/>}/>
        <Route path="/Returns" element={<Returns/>}/>
        

        
      
      </Routes> 
     




      
    </>
  )
};

export default App;
