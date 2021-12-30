import React from "react";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import "./styles.css";

const SidebarCard = () => {
  return (
    <div className="sidebar-card">
      <div className="sidebar-header">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Neil whitfield"
        />
        <div className="sidebar-info">
          <h1>Neil Whitfield</h1>
          <div className="sidebar-actions">
            <ul>
              <li>
                <AiOutlineEdit />
                Edit
              </li>
              <li>
                <AiOutlineEye />
                View
              </li>
              <li>
                <IoIosShareAlt />
                Share
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sidebar-data">
        <div className="data-item">
          <h3>5.6K</h3>
          <h4>Followers</h4>
        </div>
        <div className="data-item">
          <h3>1.2K</h3>
          <h4>Following</h4>
        </div>
        <div className="data-item">
          <h3>57.3K</h3>
          <h4>Points</h4>
        </div>
      </div>
      <div className="sidebar-button">Complete your profile</div>
    </div>
  );
};

export default SidebarCard;
