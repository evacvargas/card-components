import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { MdMessage, MdShowChart } from "react-icons/md";
import { BiRepost, BiDotsHorizontalRounded } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import "./styles.css";

const FeedCard = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="avatar">
          <div className="pro-badge">PRO</div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Jessica Jane"
          />
        </div>
        <div className="profile-info">
          <div className="profile-name">
            <h2> Jessica Jane </h2>
            <span className="badge">
              ~$24.9k <strong>Buy </strong>
            </span>
          </div>
          <h3> QA Engineer at Devdoots</h3>
          <div className="follow-action"> Follow </div>
          <div className="more-options">
            <BiDotsHorizontalRounded color="#18243A" />
            <span>2h</span>
          </div>
        </div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. @andrei Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. vb
        </p>
      </div>
      <div className="actions">
        <ul>
          <li>
            <MdShowChart />
            Upvote (1.5k)
          </li>
          <li>
            <MdMessage />
            Comment (243)
          </li>
          <li>
            <BiRepost />
            Repost (243)
          </li>
          <li>
            <IoDiamondOutline />
            Support (243)
          </li>
          <li>
            <IoIosShareAlt />
            Share
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedCard;
