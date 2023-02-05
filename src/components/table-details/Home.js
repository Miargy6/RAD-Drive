import React from "react";
import  { database } from "../../firebase";
import "./Home.css";
import { toast } from "react-toastify";
import { useParams, useLocation } from "react-router-dom";
import { useFolder } from "../../hooks/useFolder";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const Home = ({ updateData }) => {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { childTableData } = useFolder(folderId, state.folder);

  const onDelete = (id) => {
    if (
      window.confirm("Are you sure that you wante to delete this information ?")
    ) {
      database.tableData
        .doc(id)
        .delete()
        .then(() => toast.success("Information deleted Successfully!"))
        .catch((err) => {
          toast.error(err);
        });
    }
  };
  return (
    <div>
      <table className="styled-table d-inline-flex">
        <tbody>
          {childTableData.length ? (
            childTableData.map((tableData) => {
              return (
                <tr key={tableData.id}>
                  <td>{tableData.name}</td>
                  <td>{tableData.email}</td>
                  <td className="">
                    <button
                      className="btn btn-edit text-dark btn-sm"
                      title="Edit"
                      onClick={() => {
                        updateData({
                          name: tableData.name,
                          email: tableData.email,
                          id: tableData.id,
                        });
                      }}
                    >
                      <FaRegEdit size={18}/>
                    </button>

                    <button
                      className="btn btn-delete text-dark btn-sm"
                      title="Delete"
                      onClick={() => onDelete(tableData.id)}
                    >
                      <FaRegTrashAlt size={18} />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
