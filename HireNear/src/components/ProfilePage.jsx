import { useParams, useLocation, Link } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';

function ProfilePage() {
  const Loggedin = localStorage.getItem('Loggedin') === 'true'
  const { id } = useParams();
  const location = useLocation();
  const user = location.state?.user; // retrieve passed user
  if (!user) return <p>No user data found for {id}</p>;
  function messgeSub(event){
    event.preventDefault();
    {Loggedin?(
      clear(),
      alert('Message sent successfully!')
    ):(
      alert('Please login to send message')
    )}
  }
  function clear(){
    document.getElementById('message').value=''
  }
  return (
    <div>
      <div id='top1'>
        <NavBar/>
      </div>
      <div className='mt-15'id='top2'>
        <Link to='/applicants' className='text-white bck'>← Back</Link>
        <div id='top2-div'>
          <img src={user.picture.large} alt={user.name.first} id='img1'/>
          <h2 className='text-3xl text-white'>{user.name.first} {user.name.last}</h2>
        </div>
      </div>
      <div id='top2-div1'>
        <p><span className='font-semibold'>Email:</span>{user.email}</p>
        <p><span className='font-semibold'>Gender:</span> {user.gender}</p>
        <p><span className='font-semibold'>Location:</span> {user.location.state},{user.location.country}</p>
        <h2 className='text-2xl font-semibold underline pt-5'>Description</h2>
        <div className='w-3/4 ml-40 desc'>
          <hr></hr>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vero consequatur ut eum ratione laboriosam, a ea reprehenderit unde soluta quidem similique odio ex. Eius aspernatur numquam sequi nihil ex?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque sunt facilis nulla consequatur ex eligendi suscipit rerum amet, eos reprehenderit commodi cum. A aperiam, odit quos itaque eligendi reiciendis.</p>
        </div>
        <div>
          <h2 className='pt-10 font-bold underline'>Skills</h2>
          <ol  className='italic'>
            <li>⭐lorem</li>
            <li>⭐lorem</li>
            <li>⭐lorem</li>
            <li>⭐lorem</li>
          </ol>
          <div className='mt-5 mb-10'>
            <form onSubmit={messgeSub}>
              <label htmlFor='message' className='font-semibold'>Message:</label><br></br>
              <input type="text" placeholder='type message here...' required id='message' className='h-70 w-150 bg-gray-200'/>
              <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ml-2'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
      </div>
      
  );
}

export default ProfilePage
