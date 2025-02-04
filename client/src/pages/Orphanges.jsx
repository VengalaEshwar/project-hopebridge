import React,{Children, useEffect, useState} from "react";
import "../styles/Orphanages.css";
import {NavLink, useNavigate} from "react-router-dom";
import OrphanageHome from "../components/OrphanageHome";
import  Child from "../components/Child"
import OrphanageChildForm from "../components/OrphanageChildForm";
import OrphanageApplications from "../components/OrphanageApplications";
import OrphanageTransaction from "../components/OrphanageTransaction";
import OrphanageGallery from "../components/OrphanageGallery";
import Emergency from "./Emergency.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getOrphanage } from "../redux/slices/orphanageSlice.js";
import axiosInstance from "../helpers/axiosInstance.js";

const ChildList = () => {
  const childIDs = useSelector((state) => state.orphanage.children);

  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const responses = await Promise.all(
          childIDs.map((id) =>
            axiosInstance.get(`/child/getSingleChild/${id}`).then((data)=>data?.data?.child)
          )
        );
        setChildren(responses);
      } catch (error) {
        console.error("Error fetching child data:", error);
      }
    };

    if (childIDs.length > 0) {
      fetchChildren();
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-green-500 text-4xl text-center mb-4">Children</h1>
      <ul className="space-y-4">
        {children.length > 0 ? (
          children.map((child) =><Child data={child}/>)
        ) : (
          <p className="text-center text-gray-500">No children found.</p>
        )}
      </ul>
    </div>
  );
};


function Orphanges() {
  const role= useSelector((state)=>state.auth.role);
  const navigate = useNavigate();
  useEffect(()=>{
    if(role!='orphanage')
      navigate("/unauthorisedaccess");
    // const 
  })
  const navList = ["Home","Children","Add Child","Applications","Transactions","Gallery","Emergency",]
  const [currentTab ,setCurrentTab]=useState(0);
  // This code related to Children Tab
  let childs = []
  for(let i=0;i<10;i++)
    childs.push(<Child/>)
  const orphanageTabs =[<OrphanageHome/> ,<ChildList/>,<OrphanageChildForm/>,<OrphanageApplications/>,<OrphanageTransaction/>,<OrphanageGallery/>,<Emergency/>]
  const handleNavClick =(key)=>{
    setCurrentTab(key);
  }
    const [isWide, setIsWide] = useState(window.innerWidth >= 768);
    const orphanageID = useSelector((state)=>state.auth.data.id);
    const dispatch = useDispatch();
    useEffect(() => {
      const fetchDetails = async ()=>{
        const details =await  dispatch(getOrphanage(orphanageID));
      console.log(details);
      }
      fetchDetails();
      const handleResize = () => {
        setIsWide(window.innerWidth >= 768);
      };
  
      // Add event listener
      window.addEventListener("resize", handleResize);
  
      // Cleanup listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);


  const [show ,setShow] = useState(false);
  return (
    <div>
      <div className="orphanages-header"></div>
      <div className="orphanages-container">
        <div className="orphanages-container-left">
          {navList.map((val,index)=>
          <NavLink 
            to="" 
            className="active:scale-95 hide" 
            key={index} 
            onClick={()=>handleNavClick(index) }  
            style={{"color" : index==currentTab?"red":"white","display" : (show || isWide) ?"flex":"none"}}>
              {val}
          </NavLink>
        )} 
        <div className="hidden max-md:block w-full">
          <NavLink 
            to="" 
            className="active:scale-95 " 
            onClick={()=>{setShow(!show)}}
            >
              {!show?"Show All":"hide"}
        </NavLink></div>
        
        {/* <img src="images/logo.png" alt="" /> */}
        </div>
        <div className="orphanages-container-right">
          {orphanageTabs[currentTab]}
        </div>
      </div>
    </div>
  );
}

export default Orphanges;
