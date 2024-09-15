import React from "react";
import ProjectOverview from "../components/ProjectOverview";
import TaskResource from "../components/TaskResource";
import CommunicationConflicts from "../components/CommunicationConflicts";

function ProjectDetails() {
  return (
    <div className=''>
      <ProjectOverview />
      <TaskResource />
      <CommunicationConflicts />
    </div>
  );
}

export default ProjectDetails;
