import React from "react";

function WorkCard({data,icon}) {
  return (
    <div className="work-card">
      <div className="work-card-img"><i className={icon}></i></div>
      {data}
    </div>
  );
}

export default WorkCard;
