import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin =(e)=>{
    e.preventDefault();
    navigate("/homepage")
  }
  return (
    <main className="bg-slate-100 min-h-screen flex items-center justify-center p-8 md:p-0">
      <div className="bg-white shadow-lg flex flex-col items-center rounded-xl overflow-hidden lg:flex-row lg:w-2/3 2xl:w-1/2">
        {/* form */}
        <div className="p-8 lg:w-1/2 sm:p-8">
          <h1 className="font-bold text-gray-800 text-3xl md:text-4xl md:mb-16">Live the Moments and Celebrate with us!!</h1>

          <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-700">Login</h2>

          <form className="flex flex-col" onSubmit={handleLogin}>
            <div id="input-field" className="flex flex-col mb-4 relative">
              <i className="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400"></i>
              <label htmlFor="email" className="mb-2 text-gray-700">Your email</label>
              <input type="email" name="" id="email" placeholder="youremail@gmail.com" className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none" />
            </div>

            <div id="input-field" className="flex flex-col relative">
              <i className="fi fi-rr-lock absolute top-11 right-5 text-zinc-400"></i>
              <label htmlFor="Password" className="mb-2 text-gray-700">Password</label>
              <input type="password" name="" id="password" placeholder="your password" className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500" />
            </div>

            <a href='HomePage' className='text-center'><button className="my-6 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-4 py-2 rounded-md">Login</button></a>
          </form>

          <p className="text-gray-500">Don't have an account? <a href="signup" className="text-blue-500 font-semibold underline">Sign up</a></p>
        </div>

        {/* image */}
        <div className="w-1/2">
          <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713767764/flowers-4020984_1280_zpcia6.jpg" alt="ttt" className="h-full lg:block hidden" />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
