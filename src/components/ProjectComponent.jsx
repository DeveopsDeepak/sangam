import React from 'react';
import circleimage from '../assets/circleImage.jpg'

function ProjectComponent(projectDetails) {
  return (
    <div className='flex items-center rounded-2xl shadow-md'>
      <div className='p-5'>
        <h3 className='font-bold text-xl'>{projectDetails.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, reprehenderit.</p>
        <ul className='mx-3 my-3'>
                <li>Time: </li>
                <li>Duration: </li>
                <li>Budget: </li>
                <li>Location: </li>
        </ul>
      </div>
      <img className='w-40 h-40' src={circleimage} alt="circleimage" />
    </div>
  )
}

export default ProjectComponent
