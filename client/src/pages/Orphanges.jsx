import React,{Children, useState} from "react";
import "../styles/Orphanages.css";
import {NavLink} from "react-router-dom";
import OrphanageHome from "../components/OrphanageHome";
import  Child from "../components/Child"
function Orphanges() {
  const navList = ["Home","Children","Add Child","Applications","See Funds","Request Funds","Emergency","Gallery"]
  const [currentTab ,setCurrentTab]=useState(0);
  let childs = []
  for(let i=0;i<10;i++)
    childs.push(<Child/>)
  const orphanageTabs =[<OrphanageHome/> ,childs]
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
        </div>
        <div className="orphanages-container-right">
          {orphanageTabs[currentTab]}
        </div>
      </div>
    </div>
  );
}

export default Orphanges;
