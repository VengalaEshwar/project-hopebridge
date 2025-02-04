import React, { useState } from "react";
const getAge = (dob) => {
  const birthYear = new Date(dob).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
function Child({data}) {
  const [flag, setFlag] = useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <div className="child-card">
      <img className="child-card-photo" src={data?.imageURL}></img>
      <div className="child-details">
        <ul>
          <li>Name : {data?.name}</li>
          <hr />
          <li>Age : {getAge(data?.dob)}</li>
          <hr />
          <li>Gender : {data?.gender}</li>
          <hr />
          <li>DOB : {data?.dob.split("T")[0]}</li>
          <hr />
          {!flag ? (
            <>
              <li>location : hyderabad</li>
              <hr />
              <li>Orphanage : coming soon...</li>
              <hr />
              <li>Child Id : {data._id}</li>
              <hr />
              <li>Orphanage Id : {data.orphanage}</li>
              <hr />
              <li>updated at :  {data?.addedAt.split("T")[0]}</li>
              <hr />
              <li>
                description : <br />
               {data?.description}
              </li>
              <button 
              className="bg-green-400 p-2 hover:bg-green-500 active:scale-95 w-60 rounded-md my-2 child-btn">adopt</button>
            </>
          ) : null}

          <button
            className="bg-red-400 p-2 hover:bg-red-500 active:scale-95 w-60 rounded-md child-btn"
            onClick={handleClick}
          >
            {flag ? "View More" : "View Less"}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Child;
