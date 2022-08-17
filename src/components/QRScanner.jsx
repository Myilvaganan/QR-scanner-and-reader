import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = (props) => {
  const [data, setData] = useState({
    container: "-",
    tube: "-",
    vessel: "-",
    location: "-",
  });

  return (
    <div className="text-center mt-3">
      <div className="row">
        <div className="col-md-6">
          <QrReader
            onResult={(result) => {
              if (!!result) {
                setData(JSON.parse(result?.text));
              }
            }}
            containerStyle={{ width: "500px" }}
          />
        </div>
        <div className="col-md-6">
          <p>
            <b>Container: {data?.container}</b>
          </p>
          <p>
            {" "}
            <b>Vessel No:{data?.vessel}</b>
          </p>
          <p>
            {" "}
            <b>Tube No:{data?.tube}</b>
          </p>
          <p>
            {" "}
            <b>Location: {data?.location}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
