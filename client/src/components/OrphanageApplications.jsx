import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../helpers/axiosInstance";
const Application = ({data}) => {
  return (
    <div className="application cursor-pointer">
      <div className="application cursor-pointer ">
        <div className="applicant-name">{data?.name}</div>
        <div className="orphanage-name">{data?.orphanage}</div>
        <div className="child-id">{data?.child}</div>
        <div className="applicant-mail">{data?.applicationDate?.split("T")[0]}</div>
      </div>
        <i className="fa-solid fa-check bg-green-600 text-3xl px-10 m-3  hover:bg-green-700 active:scale-95 max-md:text-xl max-md:px-4 max-md:m-1"></i>
        <i className="fa-solid fa-xmark bg-red-600 text-3xl px-10 m-3  hover:bg-red-700 active:scale-95 max-md:text-xl max-md:px-4 max-md:m-auto "></i>
      </div>
    // </div>
  //    dont forget to add view more option in application which includes contact and other details
  );
};
const header = {
  name: "NAME",
  orphanage: "ORPHANAGE ID",
  child: "CHILD ID",
  applicationDate: "DATE",
};
function OrphanageApplications() {
  const userApplications = useSelector((state) => state.orphanage.applications);
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const responses = await Promise.all(
          userApplications.map(async (id) => {
            const response = await axiosInstance.get(`/adopt/${id}`);
            return response?.data?.application;
          })
        );
        setApplications(responses); // Update state only once
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    if (userApplications.length > 0) {
      fetchApplications();
    }
  }, [userApplications]); 
  return (
    <>
      <h1 className="text-red-400 text-4xl text-center">Applications</h1>
      <div className="orphanage-application-layout">
      <div className="application cursor-pointer ">
        <div className="applicant-name">{header?.name}</div>
        <div className="orphanage-name">{header?.orphanage}</div>
        <div className="child-id">{header?.child}</div>
        <div className="applicant-mail">{header?.applicationDate?.split("T")[0]}</div>
      </div>
       {applications.map((data)=><Application data={data}/>)}
      </div>
    </>
  );
}

export default OrphanageApplications;
