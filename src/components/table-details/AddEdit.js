import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./AddEdit.css";
import fireDb from "../../firebase";
import { database } from "../../firebase";
import { toast } from "react-toastify";

const AddEdit = ({ defaultValues, afterSubmit }) => {
  const { name, email, id } = defaultValues || {};
  const [state, setState] = useState({ name, email, id });
  const { folderId } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name || !state.email) {
      toast.error("Please provied value in each input field!");
    } else {
      if (!id) {
        database.tableData.add({
          name: state.name,
          email: state.email,
          folderId: folderId ? folderId : null,
          createdAt: database.getCurrentTimestamp(),
        });
      } else {
        database.tableData.doc(id).update({
          name: state.name,
          email: state.email,
        });
        fireDb.child(`tableDetail/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Information Updated Successfully!");
          }
        });
      }
    }
    afterSubmit();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter the Specification..."
          defaultValue={name || ""}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        />

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter the Details..."
          defaultValue={email || ""}
          onBlur={handleInputChange}
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? "Update" : "Save"} />
      </form>
    </div>
  );
};

export default AddEdit;
