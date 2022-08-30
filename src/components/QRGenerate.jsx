import React from "react";
import QRCode from "qrcode.react";

const QRGenerate = () => {
  const [container, setContainer] = React.useState("");
  const [vessel, setVessel] = React.useState("");
  const [tube, setTube] = React.useState("");
  const [location, setLocation] = React.useState("");

  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${
      container + "_" + vessel + "_" + tube + "_" + location
    }.png`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const createRow = (id, label, placeholder, eventHandler) => {
    return (
      <div className="row">
        <div className="col">
          <div className="mb-2">
            <label form={id} className="form-label">
              {label}
            </label>
            <input
              type="text"
              className="form-control"
              id={id}
              onChange={(event) => eventHandler(event.target.value)}
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="main-container mt-3">
      {createRow(
        "container",
        "Container Name:",
        "Enter container name",
        setContainer
      )}
      {createRow("vessel", "Vessel No.:", "Enter vessel no.", setVessel)}
      {createRow("tube", "Tube No.:", "Enter tube no.", setTube)}
      {createRow("location", "Location:", "Enter location", setLocation)}
      {container && vessel && tube && location && (
        <div className="col-12 justify-content-center align-items-center d-flex flex-column">
          <QRCode
            id="qr-gen"
            value={JSON.stringify({ container, vessel, tube, location })}
            size={290}
            level={"H"}
            includeMargin={true}
          />
          <div className="row mt-5">
            <div className="col">
              <b className="m-3">
                <button
                  type="button"
                  onClick={downloadQRCode}
                  className={"btn btn-warning"}
                  disabled={!container || !vessel || !tube || !location}
                >
                  Download QR Code
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
