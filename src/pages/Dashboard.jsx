import React from "react";
import image from "../assets/backgroundImage.png";
import progressChart from "../assets/Progress-chart.png";

function Project() {
  return (
    <div className='flex'>
      <div className='flex flex-col mx-4 rounded-lg border-black p-3 w-1/3'>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='w-full h-96 bg-center bg-no-repeat rounded-xl'>
          <div className='p-5'>
            <h3 className='font-bold text-xl text-center'>Electrical1</h3>
            <p>
              This project is under Department of electricity.The main objective
              of this project of connection and networking of electricity lines
              between Khanpur and Bulandshahr.{" "}
            </p>
          </div>
          <div className='p-5'>
            <h3 className='font-bold text-xl text-center'>Details</h3>
            <p>Location: Khanpur to Bulandshahr</p>
            <p>Budget: 10 cr</p>
          </div>
        </div>
        <div className='my-3'>
          <h3 className='font-bold text-xl text-center'>Progress Chart</h3>
          <img className='my-black' src={progressChart} alt='' />
        </div>
        <div className='border-black rounded-lg'>
          <h3 className='font-bold text-xl text-center'>Tasks</h3>
          <ul className='p-3'>
            <li>Lorem ipet. In vit.</li>
            <li>Lorem ipsum dolor vit.</li>
            <li>Lorem iet. In vit.</li>
            <li>Lorem ipsum it.</li>
            <li>Lorem ipet. In vit.</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col mx-4 rounded-lg border-black p-3 w-1/3'>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='w-full h-96 bg-center bg-no-repeat rounded-xl'>
          <div className='p-5'>
            <h3 className='font-bold text-xl text-center'>Electrical1</h3>
            <p>
              This project is under Department of electricity.The main objective
              of this project of connection and networking of electricity lines
              between Khanpur and Bulandshahr.{" "}
            </p>
          </div>
          <div className='p-5'>
            <h3 className='font-bold text-xl text-center'>Details</h3>
            <p>Location: Khanpur to Bulandshahr</p>
            <p>Budget: 10 cr</p>
          </div>
        </div>
        <div className='my-3'>
          <h3 className='font-bold text-xl text-center'>Progress Chart</h3>
          <img className='my-black' src={progressChart} alt='' />
        </div>
        <div className='border-black rounded-lg'>
          <h3 className='font-bold text-xl text-center'>Tasks</h3>
          <ul className='p-3'>
            <li>Lorem ipet. In vit.</li>
            <li>Lorem ipsum dolor vit.</li>
            <li>Lorem iet. In vit.</li>
            <li>Lorem ipsum it.</li>
            <li>Lorem ipet. In vit.</li>
          </ul>
        </div>
      </div>
      <div className='w-1/3 mx-4'>
        <div className='border-black p-5 rounded-lg'>
          <img src={progressChart} alt='' />
          <h3 className='font-bold text-xl'>Completed Task</h3>
          <p>hfgrejdejlk</p>
        </div>
        <div className='border-black p-5 rounded-lg my-5'>
          <h3 className='font-bold text-xl px-5'>Notifications</h3>
          <ul className='p-5'>
            <li>Lorem ipet. In vit.</li>
            <li>Lorem ipsum dolor vit.</li>
            <li>Lorem iet. In vit.</li>
            <li>Lorem ipsum it.</li>
            <li>Lorem ipet. In vit.</li>
            <li>Lorem ipsum it.</li>
            <li>Lorem ipet. In vit.</li>
          </ul>
        </div>
        <div className="border-black p-5 rounded-lg">
          <h3 className='font-bold text-xl px-5'>Conflict</h3>
          <ul className='p-5'>
            <li>Lorem ipet. In vit.</li>
            <li>Lorem ipsum dolor vit.</li>
            <li>Lorem iet. In vit.</li>
            <li>Lorem ipsum it.</li>
            <li>Lorem ipet. In vit.</li>
            <li>Lorem ipsum it.</li>
            <li>Lorem ipet. In vit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
