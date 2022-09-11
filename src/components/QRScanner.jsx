import React, { useState, Fragment } from "react";
import { QrReader } from "react-qr-reader";
import { CAMERA_CONSTRAINT_ENVIRONMENT, EMPTY, QR_SCANNER_WIDTH } from "../constants/scanApp";
import ResultTable from "./ResultTable";
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
    <Fragment>
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
      </div>
      {
        !showCamera && (
          <ResultTable scannedData={data} />
        )

      }
    </Fragment>
  );
};

export default QRScanner;
