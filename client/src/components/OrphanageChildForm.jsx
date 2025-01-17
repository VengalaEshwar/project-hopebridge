import React, { useState } from "react";

function OrphanageChildForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    dob: "",
    location: "",
    orphanage: "",
    childId: "",
    orphanageId: "",
    updatedAt: "",
    description: "",
    image: "",
    imageURL:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  console.log(formData.image, "hi");

  return (
    <div>
      <h1 className="text-green-500 text-4xl text-center">
        Child Admission Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Not Specified">Not Specified</option>
          </select>
        </div>

        <div>
          <label htmlFor="dob">DOB:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Add Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setFormData({ ...formData, imageURL: imageUrl,image: file });
              }
            }}
            accept="image/*"
          />
          {formData.image && <img src={formData.imageURL}  width={"250rem"} alt="Preview" />}
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="10"
            value={formData.description}
            onChange={handleChange}
            className=""
            style={{ resize: "none" }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-400 px-10 py-3 rounded-xl hover:bg-green-500 active:scale-95"
        >
          {" "}
          Add Child
        </button>
      </form>
    </div>
  );
}

export default OrphanageChildForm;
