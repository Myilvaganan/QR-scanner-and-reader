import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = (props) => {
  const [data, setData] = useState({
    container: "",
    tube: "",
    vessel: "",
    location: "",
  });
  const [showCamera, setShowCamera] = useState(true);

  return (
    <div className="text-center mt-3">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          {showCamera && (
            <QrReader
              onResult={(result) => {
                if (!!result) {
                  setData(JSON.parse(result?.text));
                  setShowCamera(false);
                }
              }}
              containerStyle={{ width: "300px" }}
            />
          )}
        </div>
        {!showCamera && (
          <div className="row bg-light bg-gradient p-4">
            <div className="col-12  d-flex flex-column justify-content-start align-items-start">
              <p>
                <b>Container: {data?.container}</b>
              </p>
              <p>
                <b>Vessel No:{data?.vessel}</b>
              </p>
              <p>
                <b>Tube No:{data?.tube}</b>
              </p>
              <p>
                <b>Location: {data?.location}</b>
              </p>
              <label for="floatingTextarea" className="mb-2">
                <b>Comments:</b>
              </label>
              <div style={{ width: "50%" }}>
                <textarea
                  className="form-control mb-4"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-outline-warning mx-2"
                  onClick={() =>
                    (window.location.href = "../QR-scanner-and-reader")
                  }
                >
                  Previous
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() =>
                    (window.location.href = "../QR-scanner-and-reader")
                  }
                >
                  {" "}
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRScanner;
