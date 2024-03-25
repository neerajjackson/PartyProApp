import { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'


function Login() {
  
  

  return (
    <>
      {/* <div class="bg-[url('https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg')]"> */}
        
{/* <img class="" src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg" alt="image description"/> */}

    
    {/* background-image: url(https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg); */}
        {/* <div className='flex content-center h-screen w-screen bg-[url(https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg)] '> */}
        <div className='LoginBorder'>
          
        <div class='bg-white h-96 w-2/6 border-grey-400 border-2 rounded-md overflow-hidden'>
            <h2 className='text-5xl font-bold px-4 py-6 '> PartyPro</h2>
          <form className='' >
            <div class=' py-4'>

        <input
        class="w-12/12 px-1 py-1 border-double border-2 rounded-md"
        type="text"
        name="email"
        id="email"
        placeholder='email'/>
        </div>
            <div class=' py-3'>
        <input
        class="w-12/12 px-1 py-1 border-2 border-solid hover:border-dotted  rounded-md"
        type="password"
        name="password"
        id="password"
        placeholder='password'/>
        </div>
        </form>
        <button type="button" class='text-white bg-black hover:bg-white hover:text-black '>Login</button>
        {/* <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button> */}

        </div>
        </div>
        {/* </div> */}

    </>
  )
}

export default Login
