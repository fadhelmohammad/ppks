import React from 'react';

const Proposal = () => {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="text-blue-900 text-xl mb-4">
        <a href="#" className="hover:underline">&lt; Proposal</a>
      </div>
      
      <div className="max-w-md mx-auto my-8">
        <div className="bg-gray-200 p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4">Input Data</h2>
          <div className="mb-2 p-2 bg-white border border-gray-300 rounded-md shadow-sm">
            <p className="text-sm font-medium text-gray-700">Usaha Ekonomi Produktif (UEP)</p>
          </div>
          <div className="mb-2 p-2 bg-white border border-gray-300 rounded-md shadow-sm">
            <p className="text-sm font-medium text-gray-700">Kelompok Usaha Bersama (KUBE)</p>
          </div>
          <div className="mb-2 p-2 bg-white border border-gray-300 rounded-md shadow-sm">
            <p className="text-sm font-medium text-gray-700">Penerima Manfaat</p>
          </div>
        </div>
        
        <div className="bg-gray-200 p-4 rounded-md shadow-md mt-8">
          <h2 className="text-lg font-semibold mb-4">List Data</h2>
          <div className="mb-2 p-2 bg-white border border-gray-300 rounded-md shadow-sm">
            <p className="text-sm font-medium text-gray-700">Usaha Ekonomi Produktif (UEP)</p>
          </div>
          <div className="mb-2 p-2 bg-white border border-gray-300 rounded-md shadow-sm">
            <p className="text-sm font-medium text-gray-700">Kelompok Usaha Bersama (KUBE)</p>
          </div>
          <div className="mb-2 p-2 bg-white border border-gray-300 rounded-md shadow-sm">
            <p className="text-sm font-medium text-gray-700">Penerima Manfaat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
