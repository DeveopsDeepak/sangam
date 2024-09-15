import React from 'react';
import circleimage from '../assets/circleImage.jpg'

function TaskResource() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6  text-left">
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h4 className="font-bold text-xl">Task</h4>
        <p><span className='text-lg font-normal'>Current-</span> 20</p>
        <p><span className='text-lg font-normal'>Completed-</span> 30</p>
        <p><span className='text-lg font-normal'>Total-</span> 50</p>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-md flex justify-between">
        <div>
          <h4 className="font-bold text-xl">Resources</h4>
          <p><span className='text-lg font-normal'>Current:</span> 20</p>
          <p><span className='text-lg font-normal'>Completed:</span> 30</p>
          <p><span className='text-lg font-normal'>Total:</span> 50</p>
        </div>
        <img className='w-40 h-40' src={circleimage} alt="" />
      </div>
    </div>
  );
}

export default TaskResource;
