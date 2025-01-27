import "/src/styles/App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import AboutUs from "./pages/AboutUs";
import Adoption from "./pages/Adoption";
import Blogs from "./pages/Blogs";
import Emergency from "./pages/Emergency";
import PageNotFound from "./pages/PageNotFound";
import SideBar from "./components/SideBar";
import Children from "./pages/Children";
import AiSearch from "./pages/AiSearch";
import BlogForm from "./components/BlogForm";
import Orphanges from "./pages/Orphanges";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useEffect } from "react";
import axiosInstance from "./helpers/axiosInstance";
//import styled from 'styled-components'; //used for styling components using css in js
function App() {
  // useEffect(()=>{
  //   try{
  //     console.log("App loaded");
  //   const data = axiosInstance.get("/blogs").then((data)=>{
  //     console.log(data).catch((e)=>console.log(e));
  //   });
  //   console.log(data);
  //   }catch(error)
  //   {
  //     console.log(error);
  //   }
  // })
  return (
    <div className="app">
      <SideBar />
      <NavBar />
      <Routes>
        {/* main pages  on navbar*/}
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adoption />} />
        <Route path="/blogs" element={<Blogs />}>
          <Route path="form" element={<BlogForm />} />
        </Route>
        <Route path="/orphanage" element={<Orphanges />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Donate Button router */}
        <Route path="/donate" element={<Donate />} />
        {/* These page are opened based on actions */}
        <Route path="/ai-search" element={<AiSearch />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/children" element={<Children />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
