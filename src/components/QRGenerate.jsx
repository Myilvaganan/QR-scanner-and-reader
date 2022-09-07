import React, { useState } from "react";
import QRCode from "qrcode.react";
import { EMPTY, QR_Parameters, QRGenerateConstants } from "../constants/scanApp";
import { downloadQRCode } from "../utils/utilityMethods";
import { SubmitResetButton } from "./ButtonComponent";
import uuid from 'react-uuid';

const QRGenerate = () => {
  const [value, setValue] = useState({
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
  })

  const [showQR, setShowQR] = useState(false);

  const createRow = (id, label, text, eventHandler) => {
    return (
      <div className="row">
        <div className="col">
          <div className="mb-2">
            <label form={id} className="form-label">
              <b>{label}</b>
            </label>
            <input
              type="text"
              className="form-control"
              id={id}
              value={text}
              onChange={(event) => eventHandler({ ...value, [id]: event.target.value })}
            />
          </div>
        </div>
      </div>
    );
  };

  const onSubmitHandler = () => {
    if (value[QRGenerateConstants.FIELD_1_ID] &&
      value[QRGenerateConstants.FIELD_2_ID] &&
      value[QRGenerateConstants.FIELD_6_ID] &&
      value[QRGenerateConstants.FIELD_3_ID] &&
      value[QRGenerateConstants.FIELD_7_ID] &&
      value[QRGenerateConstants.FIELD_4_ID] &&
      value[QRGenerateConstants.FIELD_8_ID] &&
      value[QRGenerateConstants.FIELD_5_ID]
    ) {
      setShowQR(true)
    } else {
      setShowQR(false)
    }
  }

  const onResetHandler = () => {
    setShowQR(false)
    setValue({
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
    })
  }

  const diableButtonOnEmptyString = () => {
    return !value[QRGenerateConstants.FIELD_1_ID] ||
      !value[QRGenerateConstants.FIELD_2_ID] ||
      !value[QRGenerateConstants.FIELD_6_ID] ||
      !value[QRGenerateConstants.FIELD_3_ID] ||
      !value[QRGenerateConstants.FIELD_7_ID] ||
      !value[QRGenerateConstants.FIELD_4_ID] ||
      !value[QRGenerateConstants.FIELD_8_ID] ||
      !value[QRGenerateConstants.FIELD_5_ID]
  }

  console.log(value.field_1)
  return (
    <div className="main-container mt-3">
      {createRow(QRGenerateConstants.FIELD_1_ID, QRGenerateConstants.FIELD_1_LABEL, value[QRGenerateConstants.FIELD_1_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_2_ID, QRGenerateConstants.FIELD_2_LABEL, value[QRGenerateConstants.FIELD_2_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_3_ID, QRGenerateConstants.FIELD_3_LABEL, value[QRGenerateConstants.FIELD_3_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_4_ID, QRGenerateConstants.FIELD_4_LABEL, value[QRGenerateConstants.FIELD_4_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_5_ID, QRGenerateConstants.FIELD_5_LABEL, value[QRGenerateConstants.FIELD_5_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_6_ID, QRGenerateConstants.FIELD_6_LABEL, value[QRGenerateConstants.FIELD_6_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_7_ID, QRGenerateConstants.FIELD_7_LABEL, value[QRGenerateConstants.FIELD_7_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_8_ID, QRGenerateConstants.FIELD_8_LABEL, value[QRGenerateConstants.FIELD_8_ID], setValue)}

      <div className="accordion accordion-flush my-2" id="accordionFlushExample" onChange={() => console.log("fghj")}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Additioal Fields
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              {createRow(QRGenerateConstants.FIELD_9_ID, QRGenerateConstants.FIELD_9_LABEL,  value[QRGenerateConstants.FIELD_9_ID],  setValue)}
              {createRow(QRGenerateConstants.FIELD_10_ID, QRGenerateConstants.FIELD_10_LABEL, value[QRGenerateConstants.FIELD_10_ID], setValue)}
              {createRow(QRGenerateConstants.FIELD_11_ID, QRGenerateConstants.FIELD_11_LABEL, value[QRGenerateConstants.FIELD_11_ID], setValue)}
              {createRow(QRGenerateConstants.FIELD_12_ID, QRGenerateConstants.FIELD_12_LABEL, value[QRGenerateConstants.FIELD_12_ID], setValue)}
              {createRow(QRGenerateConstants.FIELD_13_ID, QRGenerateConstants.FIELD_13_LABEL, value[QRGenerateConstants.FIELD_13_ID], setValue)}
              {createRow(QRGenerateConstants.FIELD_14_ID, QRGenerateConstants.FIELD_14_LABEL, value[QRGenerateConstants.FIELD_14_ID], setValue)}
            </div>
          </div>
        </div>
      </div>


      <SubmitResetButton
        onSubmitHandler={() => onSubmitHandler()}
        onResetHandler={() => onResetHandler()}
        isDisabled={diableButtonOnEmptyString()}
      />

      {showQR && (
        <div className="col-12 my-3 justify-content-center align-items-center d-flex flex-column">
          <QRCode
            id={QR_Parameters.id}
            value={JSON.stringify({
              [QRGenerateConstants.UNIQUE_ID]: uuid(),
              [QRGenerateConstants.FIELD_1_ID]: value[QRGenerateConstants.FIELD_1_ID],
              [QRGenerateConstants.FIELD_2_ID]: value[QRGenerateConstants.FIELD_2_ID],
              [QRGenerateConstants.FIELD_3_ID]: value[QRGenerateConstants.FIELD_3_ID],
              [QRGenerateConstants.FIELD_4_ID]: value[QRGenerateConstants.FIELD_4_ID],
              [QRGenerateConstants.FIELD_5_ID]: value[QRGenerateConstants.FIELD_5_ID],
              [QRGenerateConstants.FIELD_6_ID]: value[QRGenerateConstants.FIELD_6_ID],
              [QRGenerateConstants.FIELD_7_ID]: value[QRGenerateConstants.FIELD_7_ID],
              [QRGenerateConstants.FIELD_8_ID]: value[QRGenerateConstants.FIELD_8_ID],
              [QRGenerateConstants.FIELD_9_ID]: value[QRGenerateConstants.FIELD_9_ID],
              [QRGenerateConstants.FIELD_10_ID]: value[QRGenerateConstants.FIELD_10_ID],
              [QRGenerateConstants.FIELD_11_ID]: value[QRGenerateConstants.FIELD_11_ID],
              [QRGenerateConstants.FIELD_12_ID]: value[QRGenerateConstants.FIELD_12_ID],
              [QRGenerateConstants.FIELD_13_ID]: value[QRGenerateConstants.FIELD_13_ID],
              [QRGenerateConstants.FIELD_14_ID]: value[QRGenerateConstants.FIELD_14_ID]

            })}
            size={QR_Parameters.size}
            level={QR_Parameters.level}
            includeMargin={QR_Parameters.includeMargin}
          />
          <div className="row mt-3">
            <div className="col">
              <b className="m-1">
                <button
                  type="button"
                  onClick={() => downloadQRCode(value.field_1, value.field_2, value.field_3, value.field_4)}
                  className={"btn btn-warning"}
                  disabled={diableButtonOnEmptyString()}
                >
                  <b>Download QR Code</b>
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
