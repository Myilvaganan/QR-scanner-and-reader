import React from "react";
import { PLACE_HOLDER_TEXT, QRGenerateConstants } from "../constants/scanApp";

const ShipmentDetailsTable = ({
  container, vessel, tube, location, documentNumber, orderNumber, shipmentNumber, trackDetail
}) => {
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
          <td>{QRGenerateConstants.DOCUMENT_LABEL}</td>
          <td>{documentNumber}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>{QRGenerateConstants.ORDER_LABEL}</td>
          <td>{orderNumber}</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>{QRGenerateConstants.TRACK_AND_TRACE_NUMBER_LABEL}</td>
          <td>{trackDetail}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>{QRGenerateConstants.SHIPMENT_NUMBER_LABEL}</td>
          <td>{shipmentNumber}</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>{QRGenerateConstants.CONTAINER_LABEL}</td>
          <td>{container}</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>{QRGenerateConstants.VESSEL_LABEL}</td>
          <td> {vessel}</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>{QRGenerateConstants.TUBE_LABEL}</td>
          <td>{tube}</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>{QRGenerateConstants.LOCATION_LABEL}</td>
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
