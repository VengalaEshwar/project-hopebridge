import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Orphanages.css";
import ProfileHome from "../components/ProfileHome";
import Blog from "../components/Blog";
import OrphanageApplications from "../components/OrphanageApplications";
import OrphanageTransaction from "../components/OrphanageTransaction";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import UserBlogs from "../components/UserBlogs";
import UserDonations  from "../components/userDonations";
import UserApplications from "../components/userApplications";
import { logout } from "../redux/slices/authSlice";
import toast from "react-hot-toast";
function ProfilePage() {
  const dispatch = useDispatch();
  const navList = ["Profile", "My Blogs", "My Donations", "My Applications", "Transactions","Log out"];
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(0);
  const [show, setShow] = useState(false);
  const [isWide, setIsWide] = useState(window.innerWidth >= 768);
  const profileTabs = [
    <ProfileHome/>,
    <UserBlogs/>,
    <UserDonations/>,
    <UserApplications/>,
    <OrphanageTransaction/>,
    <div>logout success</div>
  ];
  const user_id = useSelector((state)=>state?.auth?.data?.id);
  const isLoggin = useSelector((state)=>state?.auth?.isLoggin);
  const role = useSelector((state)=>state?.auth?.role);
  const user = useSelector((state)=>state.user)
  useEffect(() => {
    if(!isLoggin)
      {
        navigate("/login");
        toast.success("please login to continue");
      }
      if(role!='user')
      {
        navigate("/badrequest");
        toast.error("user not authorized");
      }
    dispatch(getUser(user_id)); 
    const handleResize = () => {
      setIsWide(window.innerWidth >= 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  },[isLoggin]);
  const handleNavClick = (key) => {
    if(key==5)
    {
      dispatch(logout());
    }
    setCurrentTab(key);
  };

  return (
    <div>
      <div className="orphanages-header"></div>
      <div className="orphanages-container">
        <div className="orphanages-container-left">
          {navList.map((val, index) => (
            <NavLink
              to=""
              className="active:scale-95 hide"
              key={index}
              onClick={() => handleNavClick(index)}
              style={{
                color: index === currentTab ? "red" : "white",
                display: show || isWide ? "flex" : "none",
              }}
            >
              {val}
              
            </NavLink>
          ))}
          <div className="hidden max-md:block w-full">
            <NavLink
              to=""
              className="active:scale-95"
              onClick={() => {
                setShow(!show);
              }}
            >
              {!show ? "Show All" : "Hide"}
            </NavLink>
          </div>
        </div>
        <div className="orphanages-container-right">
          {profileTabs[currentTab]}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
