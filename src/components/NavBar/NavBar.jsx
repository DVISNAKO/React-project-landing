import React, { useState } from "react";
import "./NavBar.css";
import Icon from "./icons/Icon.png";
import LogoText from "./icons/Nexcent.png";
import Modal from "../Modal/Modal";



const NavBar = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <nav className="navBar">
      <div className="logo">
        <img src={Icon} alt="icon" />
        <img src={LogoText} alt="logo-text" />
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#features">Community</a>
        </li>
        <li>
          <a href="#features">Blog</a>
        </li>
        <li>
          <a href="#features">Pricing</a>
        </li>
        <button className="navBtn" onClick={() => setModalActive(true)}>
          Register Now
          <span class="material-icons">arrow_forward</span>
        </button>
        <Modal active={modalActive} setActive={setModalActive}/>
         
   
      </ul>
    </nav>
  );
};

export default NavBar;
