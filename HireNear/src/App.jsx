import { Routes , Route} from 'react-router-dom'
import './App.css'
import JobList from './components/JobList'
import SignUp from './components/SignUp'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Applicants from './components/Applicants'
import LandingPage1 from './components/LandingPage1'
import WorkInProgress from './components/WorkInProgress'
import ProfilePage from './components/ProfilePage'
function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/jobs' element={<JobList />}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/applicants' element={<Applicants/>}></Route>
          <Route path='/landingpage' element={<LandingPage1/>}></Route>
          <Route path='/WorkInProgress' element={<WorkInProgress/>}></Route>
          <Route path='/profiles/:id' element={<ProfilePage/>}></Route>
        </Routes>
      </div>
      </>
  )
}

export default App
