import React, { useEffect ,useState} from "react";

import axiosInstance from "../helpers/axiosInstance";

export default function AboutUs() {
  const [orphanage,setOrphanages]=useState({});
  useEffect(()=>{
    const fetchOrphanages = async ()=>{
      const response = await axiosInstance.get("/orphanage/getAll");
      console.log(response);
      setOrphanages(response);
    }
    fetchOrphanages();
  },[])
  return (
    
    <div className="about-us my-40 text-4xl text-center">
      <p>This application credits go to <a href="https://www.linkedin.com/in/vengala-eshwar-4798b425b/" className="text-blue-600" target="_blank">Eshwar vengala</a></p>
      <p>Special thanks to <a href="https://www.linkedin.com/in/pragnithp/" target="_blank"  className="text-blue-600">Pragnith Pyata</a> and <a href="https://www.linkedin.com/in/saikumar-thogaru/" target="_blank"  className="text-blue-600">Sai Kumar</a></p>
    </div>
  
  );
}
