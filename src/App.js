import React from "react";
import Profile from "./Profile/Profile";
import userImg from "./images/user.jpg";
import userImg4 from "./images/user4.jpg";
import userImg5 from "./images/user5.jpg";

import "./styles.css";

export default function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName="mohamed aziz"
        bio="Hello , my name is aziz and i like web development"
        profession="Full-Stack js Developer"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={userImg4}
          alt="avatar"
        />
      </Profile>
      <Profile
        fullName="Jane Doe"
        bio="Hello , my name is Jane Doe and i like music , i write songs , teach and play the piano"
        profession="Music Teacher"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={userImg}
          alt="avatar"
        />
      </Profile>
      <Profile
        fullName="john wick"
        bio="Hello , my name is John wick and i like web development"
        profession="assasin"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={userImg5}
          alt="avatar"
        />
      </Profile>
    </div>
  );
}
