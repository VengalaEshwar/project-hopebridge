import React from "react";

function OrphanageApplications() {
  const Application = () => {
    return (
      <div className="application cursor-pointer">
        <div className="applicant-name">V.Eshwar</div>
        <div className="child-id">12345678</div>
        <div className="applicant-mail">eshwarvengala30@gmail.com</div>
        <div className="application-select">
          <i className="fa-solid fa-check bg-green-600 text-3xl px-10 m-3  hover:bg-green-700 active:scale-95 max-md:text-xl max-md:px-4 max-md:m-1"></i>
          <i className="fa-solid fa-xmark bg-red-600 text-3xl px-10 m-3  hover:bg-red-700 active:scale-95 max-md:text-xl max-md:px-4 max-md:m-auto "></i>
        </div>
      </div>
    );
  };
//    dont forget to add view more option in application which includes contact and other details
  return (
    <>
      <h1 className="text-red-400 text-4xl text-center">Applications</h1>
      <div className="orphanage-application-layout">
        <Application />
        <Application />
        <Application />
        <Application />
        <Application />
        <Application />
        <Application />
        <Application />
        <Application />
        <Application />
        <Application />
      </div>
    </>
  );
}

export default OrphanageApplications;
