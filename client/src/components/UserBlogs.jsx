import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../helpers/axiosInstance";
import Blog from "./Blog";

const BlogsLayout = () => {
  const blogIds = useSelector((state) => state.user.blogs);
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          blogIds.map((id) => axiosInstance.get(`http://localhost:4455/blogs/user/${id}`))
        )
        setBlogsData(responses.map((res) => res?.data)); // Extract data
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }finally{
        setLoading(false)
      }
    };

    if (blogIds.length > 0) fetchBlogs();
  }, [blogIds]);

  if (loading) return <div>Loading blogs...</div>;
  return (
    <div className="blogs-layout">
      {blogsData.length > 0 ? (
        blogsData.map((data)=><Blog data={data.blog}/>)
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default BlogsLayout;
