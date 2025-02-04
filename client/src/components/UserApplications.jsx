import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../helpers/axiosInstance";
const Application = ({ data }) => {
    return (
      <div className="application cursor-pointer ">
        <div className="applicant-name">{data.name}</div>
        <div className="orphanage-name">{data.orphanage}</div>
        <div className="child-id">{data.child}</div>
        <div className="applicant-mail">{data.applicationDate.split("T")[0]}</div>
      </div>
    );
  };
function UserApplications() {
  const userApplications = useSelector((state) => state.user.applications);
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
  }, [userApplications]); // Depend on userApplications



  const header = {
    name: "NAME",
    orphanage: "ORPHANAGE ID",
    child: "CHILD ID",
    applicationDate: "DATE",
  };

  return (
    <>
      <h1 className="text-red-400 text-4xl text-center">Applications</h1>
      <div className="orphanage-application-layout">
        <Application data={header} />
        {applications.length > 0 &&
          applications.map((dat, index) => <Application key={index} data={dat} />)}
      </div>
    </>
  );
}

export default UserApplications;
