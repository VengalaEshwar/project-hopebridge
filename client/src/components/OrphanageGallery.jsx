import React, { useState,useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import axiosInstance from "../helpers/axiosInstance";

const UploadPhotoButton = () => {
  const id = useSelector((state) => state.orphanage._id);
  const [showForm, setShowForm] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageURL(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      toast.error("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("orphanageID", id);

    try {
      toast.loading("Uploading image...");
      const response = await axiosInstance.post("/orphanage/addphoto", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        toast.dismiss();
        toast.success("Image uploaded successfully!");
        setShowForm(false);
        setImageFile(null);
        setImageURL("");
      } else {
        toast.dismiss();
        toast.error("Failed to upload image.");
      }
    } catch (error) {
      toast.dismiss();
      console.error("Error uploading image:", error);
      toast.error("Error uploading image.");
    }
  };

  return (
    <div>
      {/* Button to open form */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Upload Photo
      </button>

      {/* Image Upload Form */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">Upload Image</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-2"
              />

              {imageURL && (
                <img
                  src={imageURL}
                  alt="Preview"
                  className="w-40 h-40 object-cover my-2"
                />
              )}

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

function OrphanageGallery() {
  const gallery = useSelector((state)=>state.orphanage.gallery);
  const[images,setImages]=useState();
  useEffect(()=>{
    const fetchImages = async ()=>{
      const response = await Promise.all(gallery.map(async (data)=>{
        const res = await axiosInstance.get("orphanage/getPhoto/"+data);
       return res?.data?.photo
      }))
      setImages(response);
    }
    if(gallery.length>0)
      fetchImages();
  },[gallery])
  return (
    <>
      <h2 className="text-red-400 text-4xl text-center">Gallery</h2>
      <UploadPhotoButton />
      <div className="grid grid-cols-4 gap-4 p-4">
        {images?.map((data, index) => (
          <img
            key={index}
            src={data?.imageURL}
            alt={`Child ${index + 1}`}
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </>
  );
}

export default OrphanageGallery;
