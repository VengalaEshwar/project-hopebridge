import React from "react";
import "../styles/Blogs.css";
import Blog from "../components/Blog";
function Blogs() {
  return (
    <div className="blogs-out">
        <div className="blogs-header"></div>
        <div className="blog-add-btn"><button><i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Add Blog</button></div>
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
      </div>
      <div className="blog-end"></div>
    </div>
  );
}

export default Blogs;
