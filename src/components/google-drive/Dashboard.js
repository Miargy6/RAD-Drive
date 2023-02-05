import React from "react";
import { Container, Button } from "react-bootstrap";
import { useFolder } from "../../hooks/useFolder";
import AddFolderButton from "./AddFolderButton";
import AddFileButton from "./AddFileButton";
import Folder from "./Folder";
import Navbar from "./Navbar";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import { useParams, useLocation } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import "../google-drive/HomeStyle.css";

// import TableDetails from "../table-details/TableDetails";
import { BsFillTrashFill } from "react-icons/bs";
import { database } from "../../firebase";
import { toast } from "react-toastify";
export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );

  const handleDeleteImage = (id) => {
    database.files
      .doc(id)
      .delete()
      .then(() => {
        toast.success("File deleted succesfully!");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <>
      <Navbar />

      <Container fluid>
        <div className="d-flex justify-content-between align-item-top mx-4 my-0 MainContainer">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="flex-wrap d-flex justify-content-between m-4 ">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="m-4 TableDetailsMaster d-flex ">
            {/* --Table Details-- */}
            {/* <div className="TableDetails p-0 ">
              <div>
                <TableDetails />
              </div>
            </div> */}
            {/*--End Table Details-- */}

            {/*--Photo section-- */}
            <SRLWrapper className="SRLWrapper">
              <div id="app" className="photo">
                {childFiles.map((childFile, index) => (
                  <div className="m-3 position-relative d-flex flex-wrap photo" key={index}>
                    <a href={childFile.url}>
                      <img src={childFile.url} id="photo" />
                    </a>
                    <div className="delete-top-button" id="deleteBt">
                      <Button
                        variant=""
                        title="Delete Photo"
                        className="btn-outline-danger"
                        onClick={() => {
                          handleDeleteImage(childFile.id);
                        }}
                      >
                        <BsFillTrashFill />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </SRLWrapper>
          </div>
        )}
      </Container>
    </>
  );
}
