import React from 'react'

function Gallery({isDonor}) {
    
  return (
    <div className="adopt-gallary-box">
      <h1 className={isDonor==true? "text-center text-7xl p-5 text-blue-700":"text-center text-7xl p-5"}>{isDonor?"Our Donors":"Gallery"}</h1>
     <div className="adopt-gallary">
      <img src="images/child-1.jpg" alt="" />
      <img src="images/hands.jpg" alt="" />
      <img src="images/child-1.jpg" alt="" />
      <img src="images/adopt-header.jpg" alt="" />
      <img src="images/hands.jpg" alt="" />
      <img src="images/child-1.jpg" alt="" />
      <img src="images/adopt-header.jpg" alt="" />
      <img src="images/hands.jpg" alt="" />
      <img src="images/child-1.jpg" alt="" />
      <img src="images/adopt-header.jpg" alt="" />
      <img src="images/hands.jpg" alt="" />
      <img src="images/child-1.jpg" alt="" />
      <img src="images/adopt-header.jpg" alt="" />
      <img src="images/child-1.jpg" alt="" />
      <img src="images/child-1.jpg" alt="" />
      <img src="images/child-1.jpg" alt="" />
      </div>
     </div>
  )
}

export default Gallery