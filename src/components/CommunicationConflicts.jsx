import React, { useState } from 'react';
import VideoCon from './VideoConfrencingFeature'; // Adjust the import path if necessary

function CommunicationConflicts() {
  const [showZegoRoom, setShowZegoRoom] = useState(false);

  const handleMeetingClick = () => {
    setShowZegoRoom(true);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      <div className="bg-white p-4 rounded-2xl shadow-md space-x-2">
        <h4 className='font-bold text-lg text-left'>Communication</h4>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col items-center'>
            <i className="fa-solid fa-message text-7xl"></i>
            <div>Chat</div>
          </div>
          <div 
            onClick={handleMeetingClick}
            className="flex flex-col items-center cursor-pointer"
          >
            <i className="fa-solid fa-video text-7xl"></i>
            <div>Meeting</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-md text-left">
        <h4 className="font-bold text-xl">Conflicts</h4>
        <ul className="list-disc ml-4 text-gray-500">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>
      {showZegoRoom && <VideoCon />}
    </div>
  );
}

export default CommunicationConflicts;
