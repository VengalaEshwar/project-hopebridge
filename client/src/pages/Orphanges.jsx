import React,{Children, useState} from "react";
import "../styles/Orphanages.css";
import {NavLink} from "react-router-dom";
import OrphanageHome from "../components/OrphanageHome";
import  Child from "../components/Child"
import OrphanageChildForm from "../components/OrphanageChildForm";
import OrphanageApplications from "../components/OrphanageApplications";
import OrphanageTransaction from "../components/OrphanageTransaction";
import OrphanageGallery from "../components/OrphanageGallery";
import Emergency from "./Emergency.jsx";
function Orphanges() {
  const navList = ["Home","Children","Add Child","Applications","Transactions","Gallery","Emergency"]
  const [currentTab ,setCurrentTab]=useState(0);
  // This code related to Children Tab
  let childs = []
  for(let i=0;i<10;i++)
    childs.push(<Child/>)
  const orphanageTabs =[<OrphanageHome/> ,childs,<OrphanageChildForm/>,<OrphanageApplications/>,<OrphanageTransaction/>,<OrphanageGallery/>,<Emergency/>]
  const handleNavClick =(key)=>{
    setCurrentTab(key);
  }
  return (
    <div>
      <div className="orphanages-header"></div>
      <div className="orphanages-container">
        <div className="orphanages-container-left">
          {navList.map((val,index)=>
          <NavLink 
            to="" 
            className="active:scale-95" 
            key={index} 
            onClick={()=>handleNavClick(index) }  
            style={{"color" : index==currentTab?"red":"white"}}>
              {val}
          </NavLink>
        )} 
        <img src="images/logo.png" alt="" />
        </div>
        <div className="orphanages-container-right">
          {orphanageTabs[currentTab]}
        </div>
      </div>
    </div>
  );
}

export default Orphanges;
