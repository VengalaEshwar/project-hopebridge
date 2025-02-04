import React, { useEffect,useState } from 'react'
import axiosInstance from '../helpers/axiosInstance';

function Gallery({isDonor}) {
  const [photoes,setPhotoes]=useState([]);
    useEffect(()=>{
        const fetChDonors = async ()=>{
          // const response = await axiosInstance.get("donor/getDonors");
        }
        const fetchGallary = async ()=>{ 
          const response = await axiosInstance.get("user/getGallery");
          setPhotoes(response?.data?.gallery);
        }
        if(isDonor){
            // fetChDonors();
            fetchGallary();
        }
        else{
            fetchGallary();
        }
    },[])
  return (
    <div className="adopt-gallary-box">
      <h1 className={isDonor==true? "text-center text-7xl p-5 text-blue-700 max-md:text-4xl":"text-center text-7xl p-5 max-md:text-4xl"}>{isDonor?"Our Donors":"Gallery"}</h1>
     <div className="adopt-gallary">
      {photoes && photoes?.map((item,index)=>{
        return <img src={item?.imageURL} alt="img" key={index} loading="lazy" />
      })}
      </div>
     </div>
  )
}

export default Gallery