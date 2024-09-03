import React from 'react';
import image from '../images/infest.jpeg';
import logo from '../images/logo_aceh.png';

const LoginPage = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block relative">
        <img
          src={image}
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-start items-start bg-black bg-opacity-50 text-white p-4">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo Aceh" className="w-12 h-12 mr-2" />
            <div>
              <h1 className="text-2xl font-bold">Dinas Sosial Provinsi Aceh</h1>
              <p className="text-lg">Pemerlu Pelayanan Kesejahteraan Sosial</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-start  text-white p-4">
          <h1 className="text-4xl font-bold mb-2">Selamat Datang Kembali!</h1>
          <p className="text-lg">Selamat melanjutkan pekerjaan Anda, semoga harimu menyenangkan.</p>
        </div>
      </div>
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form action="#" method="POST">
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
          </div>
          {/* Forgot Password Link */}
          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
