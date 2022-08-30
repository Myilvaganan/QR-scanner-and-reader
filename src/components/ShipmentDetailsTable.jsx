import React from "react";
import {PLACE_HOLDER_TEXT} from "../constants/scanApp";

const ShipmentDetailsTable = ({ container, vessel, tube, location }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Particulars</th>
          <th scope="col">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Container</td>
          <td>{container}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Vessel No.</td>
          <td> {vessel}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Tube No.</td>
          <td>{tube}</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Location</td>
          <td>{location}</td>
        </tr>
        <tr>
          <td>
            <b>Comments</b>
          </td>
          <td colSpan="2">
            <textarea
              className="form-control mb-4"
              placeholder={PLACE_HOLDER_TEXT}
              id="floatingTextarea"
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ShipmentDetailsTable;
