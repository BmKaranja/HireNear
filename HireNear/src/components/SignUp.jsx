import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='p-5'>
      <h2  className="text-4xl" style={{fontWeight:700}}>Sign Up For Free!</h2>
      <Link 
        to="/" 
        className="inline-flex items-center text-center gap-5 px-20 pl-13 py-2 border rounded-4xl bg-gray-300 hover:bg-gray-100 mt-4">
        <FaGoogle className="text-red-500" />
        Sign Up with Google
      </Link>
      <p className='mt-5 mb-5'>Or</p>
      <form>
      <div className='flex1'>
        <div>
        <label for='FNme'>First Name: </label>
        <input type='text' id='FNme'  className=' bg-gray-100 w-93 h-8'></input><br></br>
        </div>
        <br></br>
        <div>
        <label for='LNme'>Last Name: </label>
        <input type='text' id='LNme'  className=' bg-gray-100  w-93 h-8'></input><br></br>
        </div>
        <br></br>
        <div>
        <label for='Usere'>Email Account: </label>
        <input type='email' id ='Usere'required className=' w-93 h-8 bg-gray-100'></input><br></br>
        </div>
        <br></br>
        <div>
        <label for='Usps'>Password: </label>
        <input type='password'id='Usps' required className=' w-93 h-8  bg-gray-100' ></input><br></br>
        </div>
        <br></br>
      </div>
      <button type='submit 'className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  h-10' id='btn-1'>
        <Link to = '/landingpage'>
          Create Account →
        </Link>
      </button>
      <p>Already have an Account?<Link to='/login'className="text-blue-600 mt-6">Login</Link> </p>
    </form>
      <script src='script.js' ></script>
    </div>
  );
}

export default SignUp;
