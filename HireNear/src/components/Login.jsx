import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [Loggedin, setIn] =React.useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setIsLoading(true);
      setIn(true)
      localStorage.setItem('Loggedin', 'true');
      setTimeout(() => {
        navigate('/', {state:{Loggedin}});
      }, 1500);
    }
  };

  return (
    <div className='mt-20'>
      <h2 style={{fontWeight:700 ,fontSize:'6vh'}}>WELCOME BACK!</h2>
      <Link
        to="/"
        onClick={() => localStorage.setItem('Loggedin', 'true')}
        className=" shadows inline-flex items-center text-center gap-5 px-20 pl-13 py-2 rounded-4xl bg-gray-300 hover:bg-gray-100 mt-4">
        <FaGoogle className="text-red-500" />
        Log In with Google
      </Link>
      <p className='mt-5 mb-5'>Or</p>
      <form onSubmit={handleSubmit}>
      <div className='mt-5'>
        <label for='username'>Username: </label>
        <input type ='text' id ='username' required className='bg-gray-100 border rounded border-blue-500'></input><br></br><br></br>
        <label for='password'>Password: </label>
        <input type ='Password' id ='password' required className='bg-gray-100 border rounded border-blue-500'></input>
      </div>
      <button type='submit'  disabled={isLoading} className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 h-10 pl-5 pr-5'>
        {isLoading ? 'Loading...' : 'Login→'}
      </button>
      <p>Don't have an Account?<Link to='/signup'className="text-blue-600 mt-6">SignUp</Link> </p>
      </form>
    </div>
  )
}

export default Login
