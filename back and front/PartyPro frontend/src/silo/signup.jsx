import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const handleSignUp =(e)=>{
    e.preventDefault();
    navigate("/homepage")
  }
  return (
    <main className="bg-slate-100 min-h-screen flex items-center justify-center p-8 md:p-0">
      <div className="bg-white shadow-lg flex flex-col items-center rounded-xl overflow-hidden lg:flex-row lg:w-2/3 2xl:w-1/2">
        {/* image */}
        <div className="w-2/5">
          <img src="https://res.cloudinary.com/dtcdcvkki/image/upload/v1713537530/pexels-pixabay-53464_elxq3a.jpg" alt="ttt" className="h-auto w-full lg:block hidden object-cover" />
        </div>

        {/* form */}
        <div className="p-8 lg:w-3/5 sm:p-8">
          <h1 className="font-bold text-gray-800 text-3xl md:text-4xl md:mb-16">Discover talented and creative professionals.</h1>

          <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-700">Sign Up</h2>

          <form className="flex flex-col" onSubmit={handleSignUp}>
            <div className="flex flex-col mb-4 relative">
              <i className="fi fi-rr-user absolute top-11 right-5 text-zinc-400"></i>
              <label htmlFor="username" className="mb-2 text-gray-700">Username</label>
              <input type="text" name="" id="username" placeholder="Your username" className="px-3 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none" />
            </div>

            <div className="flex flex-col mb-4 relative">
              <i className="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400"></i>
              <label htmlFor="email" className="mb-2 text-gray-700">Your email</label>
              <input type="email" name="" id="email" placeholder="youremail@gmail.com" className="px-3 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none" />
            </div>

            <div className="flex flex-col mb-4 relative">
              <i className="fi fi-rr-lock absolute top-11 right-5 text-zinc-400"></i>
              <label htmlFor="password" className="mb-2 text-gray-700">Password</label>
              <input type="password" name="" id="password" placeholder="your password" className="px-3 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500" />
            </div>

            <div className="flex flex-col mb-4 relative">
              <i className="fi fi-rr-phone absolute top-11 right-5 text-zinc-400"></i>
              <label htmlFor="phone" className="mb-2 text-gray-700">Phone Number</label>
              <input type="tel" pattern="[0-9]*" name="" id="phone" placeholder="Your phone number" className="px-3 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none" />
            </div>

            <button className="my-6 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-4 py-2 rounded-md">Sign Up</button>
          </form>

          <p className="text-gray-500">Already have an account? <a href="login" className="text-blue-500 font-semibold underline">Login</a></p>
        </div>
      </div>
    </main>
  );
};

export default SignUpForm;
