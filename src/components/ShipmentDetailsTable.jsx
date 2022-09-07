import React from "react";
import { PLACE_HOLDER_TEXT, QRGenerateConstants } from "../constants/scanApp";

const ShipmentDetailsTable = (props) => {

  const generateRows = (values) => {
    return Object.keys(values).map((key, i) => {
      return (
        <tr key={i}>
          <th scope="row">{i + 1}</th>
          <td>{QRGenerateConstants[key.replace("ID","LABEL")]}</td>
          <td>{values[key]}</td>
        </tr>
      )
    }
    )
  }

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
        {props.scannedData && generateRows(props.scannedData)}
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
