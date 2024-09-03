import React from 'react';
import image from '../images/login.jpg';
import imageppks from '../images/infest.jpeg';
import imagepsks from '../images/infest.jpeg';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="w-full mb-4">
        <img
          src={image}
          className="w-full h-64 object-cover rounded-lg"
          alt="Login"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <button className="w-full h-80 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xl">
              Input Data
            </button>
            <button className="w-full h-80 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xl">
              List Data
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="relative bg-gray-300 rounded-lg overflow-hidden h-48">
            <img
              src={imageppks}
              alt="PPKS"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white text-xl font-bold">PPKS</span>
            </div>
          </div>
          <div className="relative bg-gray-300 rounded-lg overflow-hidden h-48">
            <img
              src={imagepsks}
              alt="PSKS"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white text-xl font-bold">PSKS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
