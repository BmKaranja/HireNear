import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setIsLoading(true);
      setTimeout(() => {
        navigate('/landingpage');
      }, 1500);
    }
  };

  return (
    <div className='p-5'>
      <h2  className="text-4xl" style={{fontWeight:700}}>Sign Up For Free!</h2>
      <Link
        to="/landingpage"
        className=" shadows inline-flex items-center text-center gap-5 px-20 pl-13 py-2  rounded-4xl bg-gray-300 hover:bg-gray-100 mt-4">
        <FaGoogle className="text-red-500 " />
        Sign Up with Google
      </Link>
      <p className='mt-5 mb-5'>Or</p>
      <form onSubmit={handleSubmit}>
      <div className='flex1'>
        <div>
        <label htmlFor='FNme'>First Name: </label>
        <input type='text' id='FNme' required className=' bg-gray-100 w-93 h-8'></input><br></br>
        </div>
        <br></br>
        <div>
        <label htmlFor='LNme'>Last Name: </label>
        <input type='text' id='LNme' required className=' bg-gray-100  w-93 h-8'></input><br></br>
        </div>
        <br></br>
        <div>
        <label htmlFor='Usere'>Email Account: </label>
        <input type='email' id ='Usere' required className=' w-93 h-8 bg-gray-100'></input><br></br>
        </div>
        <br></br>
        <div>
        <label htmlFor='Usps'>Password: </label>
        <input type='password' id='Usps' required className=' w-93 h-8  bg-gray-100' ></input><br></br>
        </div>
        <br></br>
      </div>
      <button type='submit' disabled={isLoading} className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-10' id='btn-1'>
        {isLoading ? 'Loading...' : 'Create Account →'}
      </button>
      <p>Already have an Account?<Link to='/login' className="text-blue-600 mt-6">Login</Link> </p>
    </form>
    </div>
  );
}

export default SignUp;
