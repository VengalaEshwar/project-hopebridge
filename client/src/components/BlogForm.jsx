import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../helpers/axiosInstance';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useOutletContext } from "react-router-dom";
function BlogForm() {
  const { isBlogForm, setIsBlogForm } = useOutletContext();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state?.auth?.data?.email);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    tags: '',
    image: null,
  });

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // Store the file object
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData
    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('author', formData.author);
    data.append('tags', formData.tags);
    data.append('email', userEmail); // Include email from Redux state
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      const apiFetch = axiosInstance.post('/blogs/addBlog', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.promise(apiFetch,{
        success : "added blog",
        error :  "failed blog",
        loading  : "uploading the blog"
      })
      // Send FormData with multipart/form-data
      await apiFetch.then(()=>{
        setIsBlogForm(!isBlogForm)
        navigate('/blogs'); // Redirect after successful submission
      });

      // Reset form
      setFormData({
        title: '',
        content: '',
        author: '',
        tags: '',
        image: null,
      });
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <div className="blog-form-container">
      <form className="blog-form" onSubmit={handleSubmit}>
        <h2>Create a Blog Post</h2>

        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />

        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" value={formData.content} onChange={handleChange} rows="6" required />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required />

        <label htmlFor="tags">Tags (comma-separated)</label>
        <input type="text" id="tags" name="tags" value={formData.tags} onChange={handleChange} />

        <label htmlFor="image">Upload Image</label>
        <input type="file" id="image" accept="image/*" onChange={handleFileChange} />

        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
}

export default BlogForm;
