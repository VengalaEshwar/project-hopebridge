import React, { useState } from 'react';

function BlogForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    tags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Blog:', formData);
    // Add logic to submit the blog post to your backend/API
    setFormData({
      title: '',
      content: '',
      author: '',
      tags: '',
    });
  };

  return (
    <div className="blog-form-container">
      <form className="blog-form" onSubmit={handleSubmit}>
        <h2>Create a Blog Post</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows="6"
          required
        ></textarea>

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <label htmlFor="tags">Tags (comma-separated)</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
        />
        <label htmlFor="image">Upload image</label>
        <input
        type="file"
        id="image"
        accept="image/*"
        />
        <button type="submit" >Submit Blog</button>
      </form>
    </div>
  );
}

export default BlogForm;
