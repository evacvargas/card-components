import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./styles.css";

const users = [
  {
    id: 1,
    active: true,
    name: "Gustavo",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 2,
    active: true,
    name: "Randy",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 3,
    active: false,
    name: "Maria",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 4,
    active: false,
    name: "Kianna",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 5,
    active: false,
    name: "Nolan",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
];

const RoomsCard = () => {
  return (
    <div className="rooms-card">
      <div className="rooms-header">
        <h1>Talking VC</h1>
        <BiDotsHorizontalRounded />
      </div>
      <div className="users-list">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <img
                className={user.active && "active-user"}
                src={user.img}
                alt={user.name}
              />
              <h3>{user.name}</h3>
            </div>
          );
        })}
        <span>+2</span>
      </div>
      <div className="button">Join Room</div>
    </div>
  );
};

export default RoomsCard;
