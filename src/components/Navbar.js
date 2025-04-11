import { useState } from "react";
export default function Navbar() {
    const[showSidebar,setSidebar] = useState(false)
    return (
      <div className="navbar container">
        <a href="#!" className="logo">F<span>oo</span>diesHub</a>
        <div className="nav-links">
            <a href="#!">Home</a>
            <a href="#!">Recipes</a>
            <a href="#!">Settings</a>
        </div>
        <div onClick={() => setSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div>

     
      </div>
    );
  }
  