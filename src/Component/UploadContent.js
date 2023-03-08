import React, { useState } from "react";
import path from "../assets/help.png";
import { Modal, Button, Form } from "react-bootstrap";
import ShowContent from "./ShowContent";

export default function UploadContent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [selectProgressNote, setSelectProgressNote] = useState("");
  const [dataValue, setDataValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.id = Date.now().toString(36) + Math.random().toString(36).substr(2);

    data.name = name;
    data.selectProgressNote = selectProgressNote;

    setDataValue((prevData) => [...prevData, data]);
    handleClose();
  };
  const updatedData = (data) => {
    setDataValue(data);
  };
  const deleteData = (id) => {

    let dataResult = dataValue.filter((item, index) => item.id != id);
    setDataValue(dataResult);
  }
  return (
    <div className="container upload-text">
      <div className="title-img">
        <h5>Hi, Maria</h5>
        <img src={path} />
      </div>

      <p className="upload-text">Upload your session’s recordings</p>
      <Button className="upload-btn" onClick={handleShow}>
        Upload
      </Button>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={show} centered onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="title">Complete Your Upload</Modal.Title>
          </Modal.Header>
          <p className="desc">
            Fill in the details below to complete your upload
          </p>
          <Modal.Body>
            <Form className="form-details">
              <Form.Select
                aria-label="Default select example"
                value={selectProgressNote}
                onChange={(e) => setSelectProgressNote(e.target.value)}
              >
                <option>Progress Note</option>
                <option value="Progress note - 80 left">
                  Progress note - 80 left
                </option>
                <option value="Soap note - 80 left">Soap note - 80 left</option>
                <option value="EMDR note- 80 left">EMDR note- 80 left</option>
                <option value="Couples therapy note - 80 left">
                  Couples therapy note - 80 left
                </option>
                <option value="Family therapy note - 80 left">
                  Family therapy note - 80 left
                </option>
              </Form.Select>
              <Form.Control
                type="email"
                placeholder="Enter client name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="submit-btn"
              onClick={handleSubmit}
            >
              Finish Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {dataValue && <ShowContent data={dataValue} updatedData={updatedData} deleteData={deleteData} />}
    </div>
  );
}
