import React, { useState } from "react";
import QRCode from "qrcode.react";
import { EMPTY, QR_Parameters, QRGenerateConstants } from "../constants/scanApp";
import { downloadQRCode } from "../utils/utilityMethods";
import { SubmitResetButton } from "./ButtonComponent";

const QRGenerate = () => {
  const [container, setContainer] = useState(EMPTY);
  const [vessel, setVessel] = useState(EMPTY);
  const [tube, setTube] = useState(EMPTY);
  const [location, setLocation] = useState(EMPTY);
  const [documentNumber, setDocumentNumber] = useState(EMPTY);
  const [orderNumber, setOrderNumber] = useState(EMPTY);
  const [trackDetail, setTrackDetail] = useState(EMPTY);
  const [shipmentNumber, setShipmentNumber] = useState(EMPTY);
  const [showQR, setShowQR] = useState(false);

  const createRow = (id, label, placeholder, value, eventHandler) => {
    return (
      <div className="row">
        <div className="col">
          <div className="mb-2">
            <label form={id} className="form-label">
              <b>{label}</b>
            </label>
            <input
              type="text"
              className="form-control"
              id={id}
              value={value}
              onChange={(event) => eventHandler(event.target.value)}
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    );
  };

  const onSubmitHandler = () => {
    if (container &&
      vessel &&
      tube &&
      location &&
      documentNumber &&
      orderNumber &&
      trackDetail &&
      shipmentNumber) {
      setShowQR(true)
    } else {
      setShowQR(false)
    }
  }

  const onResetHandler = () => {
    setShowQR(false)
    setContainer(EMPTY)
    setLocation(EMPTY)
    setTube(EMPTY)
    setVessel(EMPTY)
    setDocumentNumber(EMPTY)
    setOrderNumber(EMPTY)
    setTrackDetail(EMPTY)
    setShipmentNumber(EMPTY)
  }
  
  const diableButtonOnEmptyString = () => {
    return !container || !vessel || !tube || !location || !documentNumber || !orderNumber || !trackDetail || !shipmentNumber
  }

  return (
    <div className="main-container mt-3">
      {createRow(QRGenerateConstants.DOCUMENT_ID, QRGenerateConstants.DOCUMENT_LABEL, QRGenerateConstants.DOCUMENT_PLACEHOLDER, documentNumber, setDocumentNumber)}
      {createRow(QRGenerateConstants.ORDER_ID, QRGenerateConstants.ORDER_LABEL, QRGenerateConstants.ORDER_PLACEHOLDER, orderNumber, setOrderNumber)}
      {createRow(QRGenerateConstants.TRACK_AND_TRACE_NUMBER_ID, QRGenerateConstants.TRACK_AND_TRACE_NUMBER_LABEL, QRGenerateConstants.TRACK_AND_TRACE_NUMBER_PLACEHOLDER, trackDetail, setTrackDetail)}
      {createRow(QRGenerateConstants.SHIPMENT_NUMBER, QRGenerateConstants.SHIPMENT_NUMBER_LABEL, QRGenerateConstants.SHIPMENT_NUMBER_PLACEHOLDER, shipmentNumber, setShipmentNumber)}
      {createRow(QRGenerateConstants.CONTAINER_ID, QRGenerateConstants.CONTAINER_LABEL, QRGenerateConstants.CONTAINER_PLACEHOLDER, container, setContainer)}
      {createRow(QRGenerateConstants.VESSEL_ID, QRGenerateConstants.VESSEL_LABEL, QRGenerateConstants.VESSEL_PLACEHOLDER, vessel, setVessel)}
      {createRow(QRGenerateConstants.TUBE_ID, QRGenerateConstants.TUBE_LABEL, QRGenerateConstants.TUBE_PLACEHOLDER, tube, setTube)}
      {createRow(QRGenerateConstants.LOCATION_ID, QRGenerateConstants.LOCATION_LABEL, QRGenerateConstants.LOCATION_PLACEHOLDER, location, setLocation)}

      <SubmitResetButton
        onSubmitHandler={() => onSubmitHandler()}
        onResetHandler={() => onResetHandler()}
        isDisabled={diableButtonOnEmptyString()}
      />

      {showQR && (
        <div className="col-12 my-3 justify-content-center align-items-center d-flex flex-column">
          <QRCode
            id={QR_Parameters.id}
            value={JSON.stringify({
              documentNumber,
              orderNumber,
              trackDetail,
              shipmentNumber,
              container,
              vessel,
              tube,
              location
            })}
            size={QR_Parameters.size}
            level={QR_Parameters.level}
            includeMargin={QR_Parameters.includeMargin}
          />
          <div className="row mt-3">
            <div className="col">
              <b className="m-1">
                <button
                  type="button"
                  onClick={() => downloadQRCode(container, vessel, tube, location)}
                  className={"btn btn-warning"}
                  disabled={diableButtonOnEmptyString()}
                >
                  <b>Download QR Code</b>
                </button>
              </b>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRGenerate;
