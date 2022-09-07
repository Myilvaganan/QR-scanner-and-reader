import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import ButtonComponent from "./ButtonComponent";
import { CAMERA_CONSTRAINT_ENVIRONMENT, EMPTY, QR_SCANNER_WIDTH } from "../constants/scanApp";
import ShipmentDetailsTable from "./ShipmentDetailsTable";
import { QRGenerateConstants } from "../constants/scanApp"

const QRScanner = (props) => {
  const [data, setData] = useState({
    [QRGenerateConstants.FIELD_1_ID]: EMPTY,
    [QRGenerateConstants.FIELD_2_ID]: EMPTY,
    [QRGenerateConstants.FIELD_3_ID]: EMPTY,
    [QRGenerateConstants.FIELD_4_ID]: EMPTY,
    [QRGenerateConstants.FIELD_5_ID]: EMPTY,
    [QRGenerateConstants.FIELD_6_ID]: EMPTY,
    [QRGenerateConstants.FIELD_7_ID]: EMPTY,
    [QRGenerateConstants.FIELD_8_ID]: EMPTY,
    [QRGenerateConstants.FIELD_9_ID]: EMPTY,
    [QRGenerateConstants.FIELD_10_ID]: EMPTY,
    [QRGenerateConstants.FIELD_11_ID]: EMPTY,
    [QRGenerateConstants.FIELD_12_ID]: EMPTY,
    [QRGenerateConstants.FIELD_13_ID]: EMPTY,
    [QRGenerateConstants.FIELD_14_ID]: EMPTY
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
            <ShipmentDetailsTable scannedData={data}/>
            <ButtonComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
