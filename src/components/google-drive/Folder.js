import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Dropdown, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { database } from "../../firebase";
import { toast } from "react-toastify";



export default function Folder({ folder }) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleDeleteFolder = () => {
    database.folders
      .doc(folder.id)
      .delete()
      .then(() => {
        toast.success("Folder deleted succesfully!");
      })
      .catch((err) => {
        toast.error(err);
      });
    handleCloseModal();
  };
  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete {folder.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteFolder}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Dropdown alignRight as={ButtonGroup}>
        <Button
          to={{
            pathname: `/folder/${folder.id}`,
            state: { folder: folder },
          }}
          variant="outline-dark"
          className="text-truncate"
          as={Link}
          style={{ width: "200px" }}
          title={folder.name}
        >
          <FontAwesomeIcon icon={faFolder} className="mr-2" />
          {folder.name}
        </Button>
        <Dropdown.Toggle split variant="outline-dark" />
        <Dropdown.Menu>
          <Dropdown.Item as="button"  onClick={handleShowModal}>
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
