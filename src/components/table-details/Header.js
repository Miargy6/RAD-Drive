import React, {useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { BsPlusSquareFill } from "react-icons/bs";
import { Label } from 'react-bootstrap';


//dinamic header Btn selection
const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/") {
      setActiveTab("Home");
    } else if(location.pathname === "/add") {
      setActiveTab("AddContact");
    } else if(location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);

  //header Btn
  return (
    <div className='header'>
      <div className='header-right d-flex justify-content-between align-items-center'>
        <div><h4 className="font-weight-bold p-4">Information</h4></div>

        <Link to="/add">
          <label title="Add Info" size="md" className={`${activeTab === "AddContact" ? "active" : ""} m-4 btn btn-outline-dark`} 
              onClick={() => setActiveTab("AddContact")}>
            <BsPlusSquareFill size={17}/>
          </label>
        </Link>
      </div>
    </div>
  );
}

export default Header;
