import React, { useEffect, useState } from "react";
import "../styles/Blogs.css";
import Blog from "../components/Blog";
import { Outlet, useNavigate } from "react-router-dom";
import axiosInstance from "../helpers/axiosInstance";

function Blogs() {
  const navigate = useNavigate();
  const [isBlogForm, setIsBlogForm] = useState(false);
  const [blogsData,setBlogsData] = useState(null);
  useEffect(()=>{
      
    const getBlogs=async ()=>{
      const data = await axiosInstance.get("/blogs");
        setBlogsData(data?.data?.blogs)
    }
        getBlogs();
    },[]);
  const BlogLayout = () => {
    return (
      <>
        <div className="blogs-layout">
          {blogsData && blogsData.map((data)=><Blog data={data}/>)}
        </div>
      </>
    );
  };
  return (
    <div className="blogs">
      <div className="blogs-header"></div>

      
      <div className="blog-add-btn">
        <button
          onClick={() => {
            navigate("/blogs/form");
            setIsBlogForm(!isBlogForm);
          }}
        >
          {!isBlogForm ? (
            <>
              <i className="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Add Blog
            </>
          ) : (
            <>Back</>
          )}
        </button>
      </div>


      {isBlogForm ? <Outlet context={{ isBlogForm, setIsBlogForm }}/> : <BlogLayout />}
      <div className="blog-end"></div>
    </div>
  );
}

export default Blogs;
