import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function OrphanageHome() {
  const orphanage = useSelector((state)=>state.orphanage);
  return (
    <div className="orphange-home-layout">
      <div className="orphange-home-layout-left">
        <img src={orphanage?.imageURL || "images/child-1.jpg"} alt="" />
      </div>
      <div className="orphange-home-layout-right">
        <ul>
          <li>
            <b>Orphanage Name :</b> {orphanage?.name}
          </li>
          <li>
            <b>Location :</b> {orphanage?.location}
          </li>
          <li>
            <b>No of Children :</b> {orphanage?.children?.length || 0}
          </li>
          <li>
            <b>Year of Establishment :</b> {orphanage?.yae || ".."}
          </li>
          <li>
            <b>email :</b>{orphanage?.email}
          </li>
          <li>
            <b>Phone no :</b>{orphanage?.phone}
          </li>
          <li>
            <b>About us  </b>
            <br />
            <p className="p-4 text-justify">
              {orphanage?.description}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrphanageHome;
