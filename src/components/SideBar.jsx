import React from 'react';
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  let openDashboard = () => {
    navigate("/dashboard")
  }

  let openProject = () => {
    navigate("project")
  } 
  return (
    <div style={{backgroundColor: "#302F34"}} className="text-white w-full h-screen flex flex-col my-5">
      <div className="text-center py-4 text-2xl font-bold">Sangam</div>
      <ul className="space-y-2 text-lg px-4">
        <div className="bg-gray-800 p-2 rounded-xl flex items-center justify-center hover:bg-blue-500 cursor-pointer" onClick={openDashboard}>
          <i className="fa-solid fa-table-columns mr-3"></i>
          <li>Dashboard</li>
        </div>
        <div className="bg-gray-800 p-2 rounded-xl flex items-center justify-center hover:bg-blue-500 cursor-pointer" onClick={openProject}>
          <i className="fa-regular fa-clone mr-3"></i>
          <li>Projects</li>
        </div>
        <div className="bg-gray-800 p-2 rounded-xl flex items-center justify-center hover:bg-blue-500 cursor-pointer">
          <i className="fa-solid fa-layer-group mr-3"></i>
          <li>Tasks</li>
        </div>
        <div className="bg-gray-800 p-2 rounded-xl flex items-center justify-center hover:bg-blue-500 cursor-pointer">
          <i className="fa-brands fa-microsoft mr-3"></i>
          <li>Resource</li>
        </div>
        <div className="bg-gray-800 p-2 rounded-xl flex items-center justify-center hover:bg-blue-500 cursor-pointer">
        <i className="fa-solid fa-user-group mr-3"></i>
          <li>Training</li>
        </div>
        <div className="bg-gray-800 p-2 rounded-xl flex items-center justify-center hover:bg-blue-500 cursor-pointer">
          <i className="fa-solid fa-comments mr-3"></i>
          <li>Discussion</li>
        </div>
        <div className="bg-gray-800 p-2 rounded-xl flex items-center justify-center hover:bg-blue-500 cursor-pointer">
          <i className="fa-solid fa-right-from-bracket mr-3"></i>
          <li>Log out</li>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
