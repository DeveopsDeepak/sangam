import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Dashboard from './pages/Dashboard'
import Project from "./pages/Project";
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className='flex'>
        <div className='w-1/4'>
          <Sidebar/>
        </div>
        <div className='flex flex-col mx-5 my-5 w-3/4'>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/projectDetails" element={<ProjectDetails/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
