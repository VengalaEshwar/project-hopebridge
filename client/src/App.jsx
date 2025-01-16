import { useState, useEffect } from "react";
import "/src/styles/App.css";
import NavBar from "./components/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import AboutUs from "./pages/AboutUs";
import Adoption from "./pages/Adoption";
import Blogs from "./pages/Blogs";
import EmergencyButton from "./components/EmergencyButton";
import Emergency from "./pages/Emergency";
import PageNotFound from "./pages/PageNotFound";
import Temp1 from "./pages/Temp1";
import Temp2 from "./pages/Temp2";
import SideBar from "./components/SideBar";
import Children from "./pages/Children";
import AiSearch from "./pages/AiSearch";
import BlogForm from "./components/BlogForm";
import Orphanges from "./pages/Orphanges";
//import styled from 'styled-components'; //used for styling components using css in js
function App() {
  return (
    <>
      <SideBar />
      <NavBar />
      <div className="content-box-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />}>
            <Route path="temp1" element={<Temp1 />} />
            <Route path="temp2" element={<Temp2 />} />
          </Route>
          <Route path="/adopt" element={<Adoption />} />
          <Route path="/ai-search" element={<AiSearch />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route path="form" element={<BlogForm />} />
          </Route>
          <Route path="/donate" element={<Donate />} />
          <Route path="/orphanage" element={<Orphanges />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/children" element={<Children />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
