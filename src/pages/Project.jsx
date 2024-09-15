import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import ProjectComponent from "../components/ProjectComponent";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();

  let openProjectDetails = () => {
    navigate("/projectDetails")
  }
  return (
    <>
      <div>
        <ButtonComponent name='Current Project' color='#3B94EE' />
        <ButtonComponent name='Past Project' color='#D9D9D9' />
      </div>
      <div className='grid grid-cols-2 gap-4 my-5'>
        <div className="cursor-pointer" onClick={openProjectDetails}>
          <ProjectComponent name='Project 1' />
        </div>
        <div className="cursor-pointer" onClick={openProjectDetails}>
          <ProjectComponent name='Project 2' />
        </div>
        <div className="cursor-pointer" onClick={openProjectDetails}>
          <ProjectComponent name='Project 3' />
        </div>
        <div className="cursor-pointer" onClick={openProjectDetails}>
          <ProjectComponent name='Project 4' />
        </div>
      </div>
    </>
  );
}

export default Project;
