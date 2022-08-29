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
            <h3>Tracking Details</h3>
            <div className="col-12  d-flex flex-column justify-content-start align-items-start">
              <ul class="list-group w-100">
                <li className="list-group-item d-flex justify-content-start">
                  <b className="me-4">Container</b> {data?.container}
                </li>
                <li className="list-group-item d-flex justify-content-start">
                  <b className="me-4">Vessel No</b>
                  {data?.vessel}
                </li>
                <li className="list-group-item d-flex justify-content-start">
                  <b className="me-4">Tube No</b>
                  {data?.tube}
                </li>
                <li className="list-group-item d-flex justify-content-start">
                  <b className="me-4">Location</b> {data?.location}
                </li>
                <li className="list-group-item d-flex justify-content-start">
                  <label for="floatingTextarea" className="mb-2">
                    <b className="me-4">Comments: </b>
                  </label>

                  <textarea
                    className="form-control mb-4"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                </li>
              </ul>

              <div className="d-flex justify-content-end align-items-end mt-3 w-100">
                <button
                  className="btn btn-warning mx-2"
                  onClick={() =>
                    (window.location.href = "../QR-scanner-and-reader")
                  }
                >
                  Previous
                </button>
                <button
                  className="btn btn-success"
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
