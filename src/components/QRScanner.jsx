import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import ButtonComponent from "./ButtonComponent";
import { CAMERA_CONSTRAINT_ENVIRONMENT, EMPTY, QR_SCANNER_WIDTH } from "../constants/scanApp";
import ShipmentDetailsTable from "./ShipmentDetailsTable";

const QRScanner = (props) => {
  const [data, setData] = useState({
    container: EMPTY,
    tube: EMPTY,
    vessel: EMPTY,
    location: EMPTY,
    documentNumber: EMPTY,
    orderNumber: EMPTY,
    trackDetail: EMPTY,
    shipmentNumber: EMPTY
  });
  const [showCamera, setShowCamera] = useState(true);

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center mt-4">
        {showCamera && (
          <QrReader
            onResult={(result) => {
              if (!!result) {
                setData(JSON.parse(result?.text));
                setShowCamera(false);
              }
            }}
            containerStyle={{ width: QR_SCANNER_WIDTH }}
            constraints={{ facingMode: CAMERA_CONSTRAINT_ENVIRONMENT }}
          />
        )}
      </div>
      {!showCamera && (
        <div className="row bg-light bg-gradient my-3">
          <h4 className="py-3 d-flex flex-column justify-content-center align-items-center text-success">
            Shipment Details
          </h4>
          <div className="col-12 table-responsive">
            <ShipmentDetailsTable
              container={data.container}
              vessel={data.vessel}
              tube={data.tube}
              location={data.location}
              documentNumber ={data.documentNumber}
              orderNumber ={data.orderNumber}
              trackDetail ={data.trackDetail}
              shipmentNumber={data.shipmentNumber}
            />
            <ButtonComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
