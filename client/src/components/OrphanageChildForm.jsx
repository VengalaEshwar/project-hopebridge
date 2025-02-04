import React, { useState } from "react";
import axiosInstance from "../helpers/axiosInstance";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function OrphanageChildForm() {
  const orphanageID = useSelector((state) => state.orphanage._id);

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
    image: null,
    orphanageID,
  });

  const [imagePreview, setImagePreview] = useState(null); // To store image preview URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });

    // Generate a preview URL for the selected image
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = new FormData();
      
      // Append values to FormData
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const tempResponse =  axiosInstance.post("/child/addChild", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.promise(tempResponse,{
        loading : "uploading the child details"
      })
      await tempResponse.then((res)=>{
        toast.success(res?.data?.message)
      }).catch((res)=>{
        toast.error(res?.data?.message)
      });
      // Reset form after successful submission
      setFormData({
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
        image: null,
        orphanageID,
      });

      setImagePreview(null); // Reset image preview
    } catch (error) {
      console.error("Error adding child:", error);
      alert("Failed to add child. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-green-500 text-3xl text-center mb-6">
        Child Admission Form
      </h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block font-semibold">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Not Specified">Not Specified</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="block font-semibold">DOB:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block font-semibold">Add Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-3 w-48 h-48 object-cover rounded-md"
            />
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            style={{ resize: "none" }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 w-full"
        >
          Add Child
        </button>
      </form>
    </div>
  );
}

export default OrphanageChildForm;
