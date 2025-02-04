import React from "react";

function Blog({data}) {
  return (
    <div className="blog">
      <img src={data?.imageURL} alt="img" loading="lazy" />
      <div className="blog-content">
        <h1 className="blog-title">{data?.title}</h1>
        <p>{data?.content}</p>
        <p className="text-yellow-500">{data?.createdAt.split('T')[0]}</p>
        <p className="text-red-500">{data?.author}</p>
      </div>
    </div>
  );
}

export default Blog;
