import React, { useState ,useEffect} from "react";
import Child from "../components/Child";
import "../styles/Children.css";
import { useNavigate } from "react-router-dom";
import AdoptionForm from "../components/AdoptionForm";
import axiosInstance from "../helpers/axiosInstance";
import toast from "react-hot-toast";
function Children() {
  const navigate = useNavigate();
  const [adoptForm, setAdoptForm] = useState(false);
  const [childResponse,setChildResponse] = useState([]);
  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const tempResponse = axiosInstance.get("/child"); // Don't await here for toast to work properly

        toast.promise(tempResponse, {
          pending: "Loading.....",
          error: "Reload the page",
        });

        const response = await tempResponse; // Now await the resolved response
        setChildResponse(response.data.children); // Assuming response contains `data`
      } catch (error) {
        console.error("Error fetching children:", error);
      }
    };

    fetchChildren();
  }, []);
  return (
    <>
    <div className="donation-header"></div>
    <div className="child-layout">
        { childResponse && (childResponse.map((child)=><Child data={child}/>))}
    </div>
    <div className="adopt-content-box-buttons">
        <div className="adopt-content-box-buttons-1">
          <h1>Donation</h1>
          <p>
          Your donation directly supports orphanages connected through HopeBridge, providing critical resources such as food, shelter, and medical care. Every contribution helps improve the lives of children in need and supports orphanages in giving them a better, brighter future.
          </p>
          <button className="adopt-page-button" onClick={()=>navigate("/donate")}>Donate</button>
        </div>
        <div className="adopt-content-box-buttons-2">
        <h1>Find Children Using AI Search</h1>
          <p>
          Use our AI-powered search to find children available for adoption
              based on specific traits, needs, or preferences. The AI algorithm
              helps filter and suggest profiles that best match your criteria,
              making it easier for families to find a perfect match.
          </p>
          <button className="adopt-page-button" onClick={()=>navigate("/ai-search")}>AI Search</button>
        </div>  
        <div className="adopt-content-box-buttons-3">
        <h1>Adoption Application Form</h1>
          <p>
          Start your adoption journey by filling out our easy-to-use
              application form. This form gathers essential information about
              your family, preferences, and readiness to adopt, helping us match
              you with children in need of a loving home. 
          </p>
          <button className="adopt-page-button" onClick={()=>{setAdoptForm(!adoptForm)}}>Application Form</button>
        </div>
      </div>
      {adoptForm ? <AdoptionForm /> : null}
    </> 
  );
}

export default Children;
