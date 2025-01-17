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
            <p className="text-justify p-3 text-xl my-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              esse quasi quidem iusto architecto, id quis sed beatae perferendis
              deserunt ducimus modi dicta doloribus explicabo exercitationem
              amet. Est quam repudiandae eos repellat? Omnis quam recusandae
              voluptatum voluptate eius ratione voluptatibus qui repellendus
              unde inventore sint totam accusamus dolore nisi esse officiis
              consectetur vel, earum asperiores consequuntur harum officia
              facere! Vitae, veniam debitis quia sapiente, aliquid quos sunt
              dicta culpa maiores, exercitationem inventore recusandae quaerat
              officiis totam excepturi voluptas alias eaque consequuntur
              mollitia repellat cum. Ipsa nihil impedit cupiditate ratione
              eligendi, illum repellat perspiciatis doloremque obcaecati culpa
              omnis incidunt est nostrum?
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default AiSearch;
