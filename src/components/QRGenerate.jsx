import React, { useState } from "react";
import QRCode from "qrcode.react";
import { EMPTY, QR_Parameters, QRGenerateConstants } from "../constants/scanApp";
import { downloadQRCode } from "../utils/utilityMethods";
import { SubmitResetButton } from "./ButtonComponent";
import uuid from 'react-uuid';
import moment from "moment"
import Input from "@awsui/components-react/input";
import Button from "@awsui/components-react/button";
import FormField from "@awsui/components-react/form-field";
import Modal from "@awsui/components-react/modal";
import ExpandableSection from "@awsui/components-react/expandable-section"
import ButtonDropdown from "@awsui/components-react/button-dropdown"
import Icon from "@awsui/components-react/icon"

const QRGenerate = () => {
  const [value, setValue] = useState({
    [QRGenerateConstants.FIELD_1_ID]: EMPTY,
    [QRGenerateConstants.FIELD_2_ID]: EMPTY,
    [QRGenerateConstants.FIELD_3_ID]: EMPTY,
    [QRGenerateConstants.FIELD_4_ID]: EMPTY,
    [QRGenerateConstants.FIELD_5_ID]: EMPTY,
    [QRGenerateConstants.FIELD_6_ID]: EMPTY,
    [QRGenerateConstants.FIELD_7_ID]: EMPTY,
    [QRGenerateConstants.FIELD_9_ID]: EMPTY,
    [QRGenerateConstants.FIELD_10_ID]: EMPTY,
    [QRGenerateConstants.FIELD_11_ID]: EMPTY,
    [QRGenerateConstants.FIELD_12_ID]: EMPTY,
    [QRGenerateConstants.FIELD_13_ID]: EMPTY,
    [QRGenerateConstants.FIELD_14_ID]: EMPTY
  })
  const [showQR, setShowQR] = useState(false);
  const [uniqueID, setUniqueID] = useState("");
  const [qrSize, setQRSize] = useState(QR_Parameters.size)

  const createRow = (id, label, text, eventHandler) => {
    return (
      <div className="row">
        <div className="col">
          <div className="mb-2">
            <FormField
              label={<b>{label}</b>}
            >
            </FormField>
            <Input
              type="text"
              id={id}
              value={text}
              onChange={(event) => eventHandler({ ...value, [id]: event.detail.value })}
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
      value[QRGenerateConstants.FIELD_5_ID]
    ) {
      setShowQR(true)
      setUniqueID(uuid())
    } else {
      setShowQR(false)
    }
  }

  const onResetHandler = (isPartialReset) => {
    setShowQR(false)

    if (isPartialReset) {
      setValue({
        ...value,
        [QRGenerateConstants.FIELD_9_ID]: EMPTY,
        [QRGenerateConstants.FIELD_10_ID]: EMPTY,
        [QRGenerateConstants.FIELD_11_ID]: EMPTY,
        [QRGenerateConstants.FIELD_12_ID]: EMPTY,
        [QRGenerateConstants.FIELD_13_ID]: EMPTY,
        [QRGenerateConstants.FIELD_14_ID]: EMPTY
      })
    } else {
      setValue({
        [QRGenerateConstants.FIELD_1_ID]: EMPTY,
        [QRGenerateConstants.FIELD_2_ID]: EMPTY,
        [QRGenerateConstants.FIELD_3_ID]: EMPTY,
        [QRGenerateConstants.FIELD_4_ID]: EMPTY,
        [QRGenerateConstants.FIELD_5_ID]: EMPTY,
        [QRGenerateConstants.FIELD_6_ID]: EMPTY,
        [QRGenerateConstants.FIELD_7_ID]: EMPTY,
        [QRGenerateConstants.FIELD_9_ID]: EMPTY,
        [QRGenerateConstants.FIELD_10_ID]: EMPTY,
        [QRGenerateConstants.FIELD_11_ID]: EMPTY,
        [QRGenerateConstants.FIELD_12_ID]: EMPTY,
        [QRGenerateConstants.FIELD_13_ID]: EMPTY,
        [QRGenerateConstants.FIELD_14_ID]: EMPTY
      })
    }
  }

  const diableButtonOnEmptyString = () => {
    return !value[QRGenerateConstants.FIELD_1_ID] ||
      !value[QRGenerateConstants.FIELD_2_ID] ||
      !value[QRGenerateConstants.FIELD_6_ID] ||
      !value[QRGenerateConstants.FIELD_3_ID] ||
      !value[QRGenerateConstants.FIELD_7_ID] ||
      !value[QRGenerateConstants.FIELD_4_ID] ||
      !value[QRGenerateConstants.FIELD_5_ID]
  }

  const OnButtonChange = (selectedSize) => {
    setQRSize(selectedSize.id)
  }

  const onDownloadingQR = () => [
    downloadQRCode(value[QRGenerateConstants.FIELD_1_ID], value[QRGenerateConstants.FIELD_2_ID], value[QRGenerateConstants.FIELD_3_ID], moment(Date.now()).format("MM/DD/YYYY"))
  ]

  return (
    <div className="main-container mt-3">
      {createRow(QRGenerateConstants.FIELD_1_ID, QRGenerateConstants.FIELD_1_LABEL, value[QRGenerateConstants.FIELD_1_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_2_ID, QRGenerateConstants.FIELD_2_LABEL, value[QRGenerateConstants.FIELD_2_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_3_ID, QRGenerateConstants.FIELD_3_LABEL, value[QRGenerateConstants.FIELD_3_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_4_ID, QRGenerateConstants.FIELD_4_LABEL, value[QRGenerateConstants.FIELD_4_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_5_ID, QRGenerateConstants.FIELD_5_LABEL, value[QRGenerateConstants.FIELD_5_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_6_ID, QRGenerateConstants.FIELD_6_LABEL, value[QRGenerateConstants.FIELD_6_ID], setValue)}
      {createRow(QRGenerateConstants.FIELD_7_ID, QRGenerateConstants.FIELD_7_LABEL, value[QRGenerateConstants.FIELD_7_ID], setValue)}

      <ExpandableSection header="Additional Fields" onChange={() => onResetHandler(true)}>
        {createRow(QRGenerateConstants.FIELD_9_ID, QRGenerateConstants.FIELD_9_LABEL, value[QRGenerateConstants.FIELD_9_ID], setValue)}
        {createRow(QRGenerateConstants.FIELD_10_ID, QRGenerateConstants.FIELD_10_LABEL, value[QRGenerateConstants.FIELD_10_ID], setValue)}
        {createRow(QRGenerateConstants.FIELD_11_ID, QRGenerateConstants.FIELD_11_LABEL, value[QRGenerateConstants.FIELD_11_ID], setValue)}
        {createRow(QRGenerateConstants.FIELD_12_ID, QRGenerateConstants.FIELD_12_LABEL, value[QRGenerateConstants.FIELD_12_ID], setValue)}
        {createRow(QRGenerateConstants.FIELD_13_ID, QRGenerateConstants.FIELD_13_LABEL, value[QRGenerateConstants.FIELD_13_ID], setValue)}
        {createRow(QRGenerateConstants.FIELD_14_ID, QRGenerateConstants.FIELD_14_LABEL, value[QRGenerateConstants.FIELD_14_ID], setValue)}
      </ExpandableSection>

      <SubmitResetButton
        onSubmitHandler={() => onSubmitHandler()}
        onResetHandler={() => onResetHandler(false)}
        isDisabled={diableButtonOnEmptyString()}
      />

      {showQR && (
        <div className="col-12 my-3 justify-content-center align-items-center d-flex flex-column">
          <Modal
            onDismiss={() => {
              setShowQR(false)
              onResetHandler(false)
            }}
            visible={showQR}
            header={<p className="fs-3">QR ID: <b style={{ color: "#ec7211" }}>{uniqueID}</b></p>}
          >
            <div className="d-flex flex-column justify-content-center align-items-center" id="innerQR">
              <QRCode
                id={QR_Parameters.id}
                value={JSON.stringify({
                  [QRGenerateConstants.UNIQUE_ID]: uniqueID,
                  [QRGenerateConstants.FIELD_1_ID]: value[QRGenerateConstants.FIELD_1_ID],
                  [QRGenerateConstants.FIELD_2_ID]: value[QRGenerateConstants.FIELD_2_ID],
                  [QRGenerateConstants.FIELD_3_ID]: value[QRGenerateConstants.FIELD_3_ID],
                  [QRGenerateConstants.FIELD_4_ID]: value[QRGenerateConstants.FIELD_4_ID],
                  [QRGenerateConstants.FIELD_5_ID]: value[QRGenerateConstants.FIELD_5_ID],
                  [QRGenerateConstants.FIELD_6_ID]: value[QRGenerateConstants.FIELD_6_ID],
                  [QRGenerateConstants.FIELD_7_ID]: value[QRGenerateConstants.FIELD_7_ID],
                  [QRGenerateConstants.FIELD_9_ID]: value[QRGenerateConstants.FIELD_9_ID],
                  [QRGenerateConstants.FIELD_10_ID]: value[QRGenerateConstants.FIELD_10_ID],
                  [QRGenerateConstants.FIELD_11_ID]: value[QRGenerateConstants.FIELD_11_ID],
                  [QRGenerateConstants.FIELD_12_ID]: value[QRGenerateConstants.FIELD_12_ID],
                  [QRGenerateConstants.FIELD_13_ID]: value[QRGenerateConstants.FIELD_13_ID],
                  [QRGenerateConstants.FIELD_14_ID]: value[QRGenerateConstants.FIELD_14_ID]

                })}
                size={qrSize || QR_Parameters.size}
                level={QR_Parameters.level}
                includeMargin={QR_Parameters.includeMargin}
              />
              <div className="row mt-3 bg-light">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <ButtonDropdown
                    disabled={diableButtonOnEmptyString()}
                    items={[
                      { text: "200 * 200", id: 200 },
                      { text: "300 * 300", id: 300 },
                      { text: "400 * 400", id: 400 },
                      { text: "500 * 500", id: 500 },
                      { text: "600 * 600", id: 600 },
                      { text: "700 * 700", id: 700 }
                    ]}
                    variant="primary"
                    onItemClick={(event) => OnButtonChange(event.detail)}
                  >
                    <b>Select QR Size</b>
                  </ButtonDropdown>
                  <Button
                    type="button"
                    variant=""
                    iconName="download"
                    className={"btn btn-warning my-3"}
                    onClick={onDownloadingQR}
                  >Download</Button>

                </div>

              </div>
            </div>

          </Modal>
        </div>
      )}
    </div>
  );
};

export default QRGenerate;
