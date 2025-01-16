import React, { useState } from "react";
import "../styles/Blogs.css";
import Blog from "../components/Blog";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
function Blogs() {
  const navigate = useNavigate();
  const [isBlogForm,setIsBlogForm] = useState(false);
  const BlogLayout = ()=>{
    return(
      <><div className="blog-add-btn" >
      <button onClick={()=>{navigate("/blogs/form");setIsBlogForm(!isBlogForm)
      }}><i className="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Add Blog</button></div>
    <div className="blogs-layout">
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
  </div></>
    )
  } 
  return (
    <div className="blogs-out">
        <div className="blogs-header"></div>
        {isBlogForm?<Outlet/>:<BlogLayout/>}
      <div className="blog-end"></div>
    </div>
  );
}

export default Blogs;
