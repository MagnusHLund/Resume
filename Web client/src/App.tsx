import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './Components/Content/Navbar'
import HomeRoute from './Components/Routes/HomeRoute'
import ProjectsRoute from './Components/Routes/ProjectsRoute'
import EducationRoute from './Components/Routes/EducationRoute'
import ContactRoute from './Components/Routes/ContactRoute'
import { useEffect } from 'react'
import { addVisitor } from './Utils/ApiCalls'
import useHelmet from './Hooks/useHelmet'
import navbarLinks from './Component data/Navbar.json'

function App() {
  useEffect(() => {
    addVisitor()
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error))
  }, [])

  useHelmet()

  return (
    <>
      <Navbar links={navbarLinks} />
      <Routes>
        <Route path="/home" element={<HomeRoute />} />
        <Route path="/projects" element={<ProjectsRoute />} />
        <Route path="/education" element={<EducationRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="*" element={<HomeRoute />} />
      </Routes>
    </>
  )
}

export default App
