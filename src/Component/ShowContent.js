import React from "react";
import { Table } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import Upload from "./Upload";

export default function ShowContent({ data, updatedData, deleteData }) {
  const handleDetete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let dataResult = data.filter((item, index) => index !== id);
      updatedData(dataResult);
    }
  };

  return (
    <div className="show-content">
      <p>
        <span className="note-length">{data.length}</span> Notes in progress
      </p>
      <Table w-aut0 className="note-table  text-nowrap">
        <thead>
          <tr>
            <th>Client</th>
            <th>Type</th>
            <th>ETA</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.selectProgressNote}</td>

                <td>
                  <Upload
                    id={data.id}
                    updatedData={updatedData}
                    data={data}
                    deleteData={deleteData}
                  />
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDetete(index)}
                  >
                    <BsFillTrashFill className="color" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
