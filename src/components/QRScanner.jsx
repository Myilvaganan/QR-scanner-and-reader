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
        <div className="row bg-light bg-gradient my-3">
          <h4 className="py-3 d-flex flex-column justify-content-center align-items-center text-success">
            Shipment Details
          </h4>
          <div className="col-12 table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Particulars</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Container</td>
                  <td>{data?.container}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Vessel No.</td>
                  <td> {data?.vessel}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Tube No.</td>
                  <td>{data?.tube}</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Location</td>
                  <td>{data?.location}</td>
                </tr>
                <tr>
                  <td>
                    <b>Comments</b>
                  </td>
                  <td colspan="2">
                    <textarea
                      className="form-control mb-4"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end align-items-end my-3 w-100">
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
  );
};

export default QRScanner;
