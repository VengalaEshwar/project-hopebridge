import React from "react";
import Child from "../components/Child";
import "../styles/Children.css";
import { useNavigate } from "react-router-dom";
function Children() {
  const navigate = useNavigate();
  const list = []
  for(let i=0;i<10;i++)
    list.push(<Child/>)
  return (
    <>
    <div className="donation-header"></div>
    <div className="child-layout">
        {list.map((state)=>state)}
    </div>
    <div className="adopt-content-box-buttons">
        <div className="adopt-content-box-buttons-1">
          <h1>heading 1</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            soluta iusto exercitationem laboriosam, dolores enim totam ratione
            quasi non, ipsam beatae provident cupiditate voluptate nemo!
          </p>
          <button className="adopt-page-button" onClick={()=>navigate("/donate")}>Donate</button>
        </div>
        <div className="adopt-content-box-buttons-2">
        <h1>heading 2</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            soluta iusto exercitationem laboriosam, dolores enim totam ratione
            quasi non, ipsam beatae provident cupiditate voluptate nemo!
          </p>
          <button className="adopt-page-button" onClick={()=>navigate("/ai-search")}>AI Search</button>
        </div>  
        <div className="adopt-content-box-buttons-3">
        <h1>heading 3</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            soluta iusto exercitationem laboriosam, dolores enim totam ratione
            quasi non, ipsam beatae provident cupiditate voluptate nemo!
          </p>
          <button className="adopt-page-button">Application Form</button>
        </div>
      </div>
    </>
  );
}

export default Children;
