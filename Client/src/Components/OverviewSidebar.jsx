import React from "react";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import { Icon } from "../assets/images";

function Sidebar() {
  return (
    <div className="flex flex-col justify-between w-[250px] bg-[#282c34] p-4">

      <div className="w-[85px] h-[85px] flex flex-row gap-2 items-center">
        <img className="w-full" src={Icon} alt="Logo" />
        <h3 className="text-white">CyberSleuths</h3>
        <div className="border-b-2 h-[2px]"></div>
      </div>

      <div className="flex flex-col mt-12 h-[70%] text-[#5041BC]">
        <NavLink
          className="flex gap-3 bg-white py-3 rounded-lg items-center justify-center"
          to="/"
        >
          <i className="fas fa-home "></i> 
          <span className="text-[#5041BC]">Dashboard</span>
        </NavLink>


        <NavLink className="flex gap-3 text-white py-3 rounded-lg items-center justify-center" to="timeline">
          
          <i className="fas fa-archive"></i>
          <span className="text-white">Timeline</span>
        </NavLink>

        <NavLink className="flex gap-3 text-white py-3 rounded-lg items-center justify-center" to="newevidence">
          
          <i className="fas fa-archive"></i>
          <span className="text-white">New Evidence</span>
        </NavLink>

        <NavLink className="flex gap-3 text-white py-3 rounded-lg items-center justify-center" to="ReportAnalytics">
          
          <i className="fas fa-archive"></i>
          <span className="text-white">Report and Analytics</span>
        </NavLink>

        <NavLink className="flex gap-3 text-white py-3 rounded-lg items-center justify-center" to="NewSuspect">
          
          <i className="fas fa-archive"></i>
          <span className="text-white">New Suspect</span>
        </NavLink>
        </div>

        <div className="">
          <div className="logo2">
            <img src={Icon} className="w-[30px] h-[30px]" alt="Logo" />
            <br></br>
            <span>Officer Frank</span>
          </div>
        </div>
      
    </div>
  );
}

export default Sidebar;
