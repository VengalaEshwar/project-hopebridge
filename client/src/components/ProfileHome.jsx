import React from "react";
import { useSelector } from "react-redux";
function ProfileHome() {
  const user = useSelector((state)=>state.user);
  return (
    <div className="orphange-home-layout">
      <div className="orphange-home-layout-left">
        <img src={user?.imageURL}  alt="" />
      </div>
      <div className="orphange-home-layout-right">
        <ul>
          <li>
            <b>Name :</b> {user.name}
          </li>
          <li>
            <b>Location :</b> {user.location}
          </li>
          <li>
            <b>Total Amount Donated :</b> {user.amountDonated}
          </li>
          <li>
            <b>email :</b>{user.email}
          </li>
          <li>
            <b>Phone no :</b>{user.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileHome;