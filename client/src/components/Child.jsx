import React, { useState } from "react";

// name: { type: String, required: true },
// age: { type: Number, required: true },
// gender: { type: String, enum: ["male", "female", "other"], required: true },
// status: {
//   type: String,
//   enum: ["available", "adopted"],
//   default: "available",
// },
// orphanage: { type: mongoose.Schema.Types.ObjectId, ref: "Orphanage" },
// bio: { type: String, required: false },
// photo: { type: String, required: false }, // URL for child photo
// addedAt: { type: Date, default: Date.now },
function Child() {
  const [flag, setFlag] = useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <div className="child-card">
      <img className="child-card-photo" src="images/child-1.jpg"></img>
      <div className="child-details">
        <ul>
          <li>Name : V.Eshwar</li>
          <hr />
          <li>Age : 24</li>
          <hr />
          <li>Gender : Male</li>
          <hr />
          <li>DOB : 15/05/2004</li>
          <hr />
          {!flag ? (
            <>
              <li>location : hyderabad</li>
              <hr />
              <li>Orphanage : hope bridge</li>
              <hr />
              <li>Child Id : 12345</li>
              <hr />
              <li>Orphanage Id : 12234567</li>
              <hr />
              <li>updated at : 15/01/20225</li>
              <hr />
              <li>
                desscription : <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                laboriosam beatae quis provident recusandae eligendi tenetur,
                nesciunt odio dignissimos harum illum architecto mollitia
                inventore qui ex amet labore, ipsum reiciendis laborum
                consectetur reprehenderit quae unde. Impedit rerum voluptatem,
                placeat debitis quisquam velit eos, maxime architecto facilis
                dignissimos harum alias repellendus eaque beatae adipisci.
                Suscipit nam deserunt illum voluptates magnam, saepe nobis
                eaque, quod assumenda nostrum eum sapiente dolore dolorem maxime
                vel eligendi incidunt architecto obcaecati doloribus corrupti
                voluptatum quidem alias provident! Ullam velit aliquam commodi
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
