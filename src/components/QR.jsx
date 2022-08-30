import React from "react";
import QRGenerate from "../QRGenerate";
import QRScanner from "./QRScanner";
import {GenerateScanButtonComponent} from "./ButtonComponent";

const QR = () => {
  const [showGenerateQR, setGenerateQR] = React.useState(false);
  const [showScanner, setScanner] = React.useState(false);

  const handler = (val) => {
    setGenerateQR(val === "generate");
    setScanner(val === "scanner");
  };

  return (
    <div className="row my-4">
     <GenerateScanButtonComponent handler={(val) => handler(val)}/>
      <div className="col-12">{showGenerateQR && <QRGenerate />}</div>
      <div className="col-12"> {showScanner && <QRScanner />}</div>
    </div>
  );
};

export default QR;
