import React, { useState } from "react";
import AddEdit from "./AddEdit";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Header.css";
import { BsPlusSquareFill } from "react-icons/bs";

function TableDetails() {
  const [showEdit, setShowEdit] = useState(false);
  const [updatable, setUpdatable] = useState({});
  const updateDataHandler = ({ id, name, email }) => {
    setUpdatable({ id, email, name });
    setShowEdit(true);
  };
  
  const addDataHandler = () => {
    setUpdatable({});
    setShowEdit(!showEdit);
  };

  return (
    <div className="App d-flex flex-column">
      <ToastContainer position="top-center" />
      <div className="header">
        <div className="header-right d-flex justify-content-between align-items-center mx-2 p-2">
          <div>
            <h4 className="font-weight-bold">Information</h4>
          </div>
          <label
            className="btn btn-outline-dark btn-md my-3 mx-2"
            title="Add Information"
            onClick={addDataHandler}
          >
            <BsPlusSquareFill size={17} />
          </label>
        </div>
      </div>
      
      <Home updateData={updateDataHandler} />
      {showEdit && <AddEdit defaultValues={updatable} afterSubmit={addDataHandler}/>}
    </div>
  );
}

export default TableDetails;
