import { Routes , Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import JobList from './components/JobList'

function App() {

  return (
      <div>
        <Routes>
          <Route path='/jobs' element={<JobList />}></Route>
        </Routes>
        <NavBar />
      </div>
    
  )
}

export default App
