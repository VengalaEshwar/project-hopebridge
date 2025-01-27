import React, { useState } from "react";
import "../styles/AiSearch.css";
import Child from "../components/Child";
function AiSearch() {
  const [openChild, setOpenChild] = useState(false);
  return (
    <>
      <div className="donation-header"></div>
      <div className="ai-search-grid">
        <div className="font-sans flex flex-wrap align-middle justify-center">
          <h1 className="text-red-400 text-3xl text-center">AI SEARCH</h1>
          <textarea
            className="ai-input-box "
            placeholder="Enter your prompt....."
          />
          <button
            className="bg-red-400 p-2 hover:bg-red-500 active:scale-95 w-60 rounded-md m-auto max-md:my-6"
            onClick={() => {
              setOpenChild(!openChild);
            }}
          >
            {" "}
            Search
          </button>
        </div>
        {openChild ? (
          <div className="">
            <h1 className="text-yellow-400 text-5xl text-center">Children</h1>
            <Child />
            <Child />
            <Child />
            <Child />
            <Child />
            <Child />
            <Child />
          </div>
        ) : (
          <div className="p-8">
            <h1 className="text-yellow-400 text-5xl text-center">
              How it works
            </h1>
            <p className="text-justify p-3 text-2xl my-20">
              Our AI-powered search feature uses advanced algorithms to help you
              find children available for adoption based on your specific
              criteria. By analyzing various attributes such as age, health,
              special needs, and background, the AI matches children with
              families who are best suited to meet their needs. You simply input
              your preferences, and the AI will filter through available
              profiles, suggesting the best matches. This streamlined process
              helps families make informed decisions quickly, ensuring that
              children find their forever homes faster and more efficiently.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default AiSearch;
