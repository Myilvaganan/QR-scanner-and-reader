import React from "react";
import QRGenerate from "../QRGenerate";
import QRScanner from "./QRScanner";
import QRReaderApp from "./QRReader";

const QR = () => {
  const [showGenerateQR, setGenerateQR] = React.useState(false);
  const [showScanner, setScanner] = React.useState(false);

  const handler = (val) => {
    setGenerateQR(val === "generate");
    setScanner(val === "scanner");
  };
  return (
    <div className="row p-2">
      <button
        className="btn btn-primary mb-3"
        onClick={() => handler("generate")}
      >
        Generate QR
      </button>
      <button className="btn btn-info" onClick={() => handler("scanner")}>
        {" "}
        Scan QR
      </button>
      {showGenerateQR && <QRGenerate />}
      {showScanner && <QRScanner />}
      <QRReaderApp />
    </div>
  );
};

export default QR;
