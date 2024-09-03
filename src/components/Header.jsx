import React from 'react';
import '../App.css'; // Ensure you have the correct CSS path
import logo from '../images/logo_aceh.png';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="header flex items-center justify-between bg-gray-200 p-3 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="logo" className='h-12' />
        <h1 className="title ml-3 text-2xl font-bold text-blue-900">DINAS SOSIAL PROVINSI ACEH</h1>
      </div>
      <CgProfile size={30} className="text-blue-900" />
    </header>
  );
};

export default Header;
