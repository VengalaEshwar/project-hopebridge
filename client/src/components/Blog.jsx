import React from "react";

function Blog() {
  return (
    <div className="blog">
      <img src="/images/hands2.jpg" alt="img" />
      <div className="blog-content">
        <h1 className="blog-title"> heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab
          natus deleniti, tempore magnam consequuntur ducimus labore quidem
          doloribus et laborum est dicta facilis dolorem, in impedit aperiam ea
          eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quo
          animi voluptatem itaque debitis repudiandae ipsam atque quibusdam rem
          illum officiis, provident voluptatum tenetur veritatis esse hic odio
          velit soluta voluptates accusamus! Delectus, ipsa natus tempore amet
          doloribus, porro, atque deleniti sit tempora distinctio explicabo
          exercitationem consequuntur. Veniam, iure alias!
        </p>
        <p className="text-yellow-500">date</p>
        <p className="text-red-500">author</p>
      </div>
    </div>
  );
}

export default Blog;
