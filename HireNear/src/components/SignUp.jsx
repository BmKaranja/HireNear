import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='p-20'>
      <h2  className="text-4xl" style={{fontWeight:700}}>Sign Up For Free!</h2>
      <Link 
        to="/" 
        className="inline-flex items-center text-center gap-5 px-20 pl-13 py-2 border rounded-4xl bg-gray-300 hover:bg-gray-100 mt-4">
        <FaGoogle className="text-red-500" />
        Sign Up with Google
      </Link>
      <p>Or</p>
      <div className='flex gap-2.5 grid-rows-1 grid1 pb-5 mt-0.5 inputs1 mr-9'>
        <input type='text' placeholder='John' required className=' bg-gray-300 '></input>
        <input type="text" placeholder='Doe'required className=' bg-gray-300' />
      </div>
      <div className='flex flex-col justify-center ml-76'>
      <input type='email' placeholder='JohnDoe@gmail.com'required className='inputs w-93 h-8 bg-gray-300'></input><br></br><br></br>
      <input type='password' placeholder='Enter your password'required className=' inputs w-93 h-8  bg-gray-300'id='i-1' ></input><br></br>
      </div>
      <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 h-10' id='i-1'>
        <Link to = '/landingpage'>
          Create Account →
        </Link>
      </button>
      <p>Already have an Account?<Link to='/login'className="text-blue-600 mt-6">Login</Link> </p>
    </div>
  );
}

export default SignUp;
