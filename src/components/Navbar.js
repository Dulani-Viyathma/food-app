import { useState } from "react";

import Sidebar from "./Sidebar";
import{faHome,faList,faCog}from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
export default function Navbar() {
    const[showSidebar,setSidebar] = useState(false)
    const links = [
      {
        name: "Home",
        path: "/",
        icon:faHome
      },
      {
        name: "Recipes",
        path: "/recipes",
        icon:faList,
      },
      {
        name: "Settings",
        path: "/settings",
        icon:faCog
      }
    ]
    function closeSidebar(){
      setSidebar(false); // ✅ use setSidebar, not showSidebar
    }
    
    
    
    return (
        <>
        <div className="navbar container">
        <a href="#!" className="logo">F<span>oo</span>diesHub</a>
        <div className="nav-links">
          {links.map(link =>(
            <a href="#!" key={link.name}>{link.name}</a>

          ))}
          
           {/* <a href="#!">Home</a>
            <a href="#!">Recipes</a>
            <a href="#!">Settings</a>*/}
        </div>
        <div onClick={() => setSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div>

     
      </div>
      {showSidebar && <Sidebar links={links} close={closeSidebar} />}

     


        </>
      
    );
  }
  