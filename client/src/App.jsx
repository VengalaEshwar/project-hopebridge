import { useState ,useEffect} from 'react'
import '/src/styles/App.css'
import NavBar from './components/NavBar';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import Donate from './pages/Donate'
import AboutUs from './pages/AboutUs'
import Adoption from './pages/Adoption'
import Blogs from './pages/Blogs'
import EmergencyButton from './components/EmergencyButton';
import Emergency from './pages/Emergency';
//import styled from 'styled-components'; //used for styling components using css in js
function App() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
      navigate("/"); 
    };

    useEffect(() => {
      if (window.location.pathname !== "/") {
        window.location.pathname = "/";
      }
    }, []); //[] -> dependency array it renders if it sees any change of state in the list items
  return (
    <>
      <NavBar/>
      <div className="content-box-main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/adopt" element={<Adoption/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/donate" element={<Donate/>}/>
          <Route path="/emergency" element={<Emergency/>}/>
        </Routes>
      </div>
      <EmergencyButton/>
    </>
  )
}


 

export default App;
