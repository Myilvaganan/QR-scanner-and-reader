import React from "react";
import QRGenerate from "../QRGenerate";
import QRScanner from "./QRScanner";

const QR = () => {
  const [showGenerateQR, setGenerateQR] = React.useState(false);
  const [showScanner, setScanner] = React.useState(false);

  const handler = (val) => {
    setGenerateQR(val === "generate");
    setScanner(val === "scanner");
  };
  return (
    <div className="row my-4">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <button
          className="btn btn-primary me-2 btn-lg"
          onClick={() => handler("generate")}
        >
          Generate QR
        </button>
        <button
          className="btn btn-secondary btn-lg"
          onClick={() => handler("scanner")}
        >
          Scan QR
        </button>
      </div>
      <div className="col-12">{showGenerateQR && <QRGenerate />}</div>
      <div className="col-12"> {showScanner && <QRScanner />}</div>
    </div>
  );
};

export default QR;
