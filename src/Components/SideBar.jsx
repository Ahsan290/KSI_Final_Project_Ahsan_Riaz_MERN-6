import React from 'react'
import { useNavigate } from "react-router-dom";


function SideBar() {
  const navigate = useNavigate()

  return (
    <div className="bg-slate-100  h-72 w-44 mt-5 ml-2 shadow-gray-500 shadow-2xl">
        <div className=""> 
            
            <button className=' h-12 w-44 shadow-gray-500 shadow-md'
            onClick={() => {
              navigate("/ActivityOverview");
            }}
            >Dashboard</button>
            
            <button className=' h-12 w-44 shadow-gray-500 shadow-md'
            onClick={() => {
              navigate("/OrderManagement");
            }}
            >Order Management</button>
            
            <button className=' h-12 w-44 shadow-gray-500 shadow-md'
            onClick={() => {
              navigate("/InventoryManagement");
            }}
            >Inventory Managment</button>
            
            <button className=' h-12 w-44 shadow-gray-500 shadow-md'
            onClick={() => {
              navigate("/Returns");
            }}
            >Returns</button>

            <button className=' h-12 w-44 shadow-gray-500 shadow-md'
            onClick={() => {
              navigate("/Feedback");
            }}
            >Feedback</button>

            <button className=' h-12 w-44 shadow-gray-500 shadow-md'
            onClick={() => {
              navigate("/Brands");
            }}
            >Brands</button>
            
        </div>
    </div>
  )
};
export default SideBar;
