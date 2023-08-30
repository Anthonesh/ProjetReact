import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/modal.css";

export default function Modale({ propriete, closeModal }) {
  return (
    <div className="modal-show">
      <Modal.Dialog>
        <Button onClick={closeModal}>X</Button>
        <Modal.Header>
          <Modal.Title className="title">{propriete.alt}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img id="modalImg" src={propriete.src.large} />
        </Modal.Body>

        <Modal.Footer>
          <p>{propriete.photographer}</p>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}