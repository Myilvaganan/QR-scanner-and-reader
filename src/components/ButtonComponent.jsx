import React from 'react'
import {
    GENERATE,
    GENERATE_TEXT,
    HOME_PATH,
    NEXT_BTN_TEXT,
    PREVIOUS_BTN_TEXT,
    SCAN_TEXT,
    SCANNER
} from "../constants/scanApp";

let ButtonComponent;
// eslint-disable-next-line no-unused-vars
export default ButtonComponent = () => {
  return (
    <div className="d-flex justify-content-end align-items-end my-3 w-100">
      <button
        className="btn btn-warning mx-2"
        onClick={() => (window.location.href = HOME_PATH)}
      >
          {PREVIOUS_BTN_TEXT}
      </button>
      <button
        className="btn btn-success"
        onClick={() => (window.location.href = HOME_PATH)}
      >
          {NEXT_BTN_TEXT}
      </button>
    </div>
  );
}

export const GenerateScanButtonComponent = ({handler}) => {
    return (
        <div className="col-12 d-flex justify-content-center align-items-center">
            <button
                className="btn btn-primary me-2 btn-lg"
                onClick={() => handler(GENERATE)}
            >
                {GENERATE_TEXT}
            </button>
            <button
                className="btn btn-secondary btn-lg"
                onClick={() => handler(SCANNER)}
            >
                {SCAN_TEXT}
            </button>
        </div>
    )
}
