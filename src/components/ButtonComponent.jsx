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
import Button from "@awsui/components-react/button";

let ButtonComponent;
// eslint-disable-next-line no-unused-vars
export default ButtonComponent = () => {
    return (
        <div className="d-flex justify-content-end align-items-end my-4 w-100">
            <Button
                className="btn btn-warning mx-2"
                iconName="angle-left"
                onClick={() => (window.location.href = HOME_PATH)}
            >
                {PREVIOUS_BTN_TEXT}
            </Button>
            <Button
                variant={"primary"}
                iconAlign="right"
                className="btn btn-success"
                iconName="angle-right-double"
                onClick={() => (window.location.href = HOME_PATH)}
            >
                {NEXT_BTN_TEXT}
            </Button>
        </div>
    );
}

export const GenerateScanButtonComponent = ({ handler }) => {
    return (
        <div className="col-12 d-flex justify-content-center align-items-center">
            <Button className="me-2" variant="primary" onClick={() => handler(GENERATE)}><b> {GENERATE_TEXT}</b></Button>
            <Button variant="normal" onClick={() => handler(SCANNER)}> <b>  {SCAN_TEXT}</b></Button>
        </div>
    )
}


export const SubmitResetButton = ({ onResetHandler, onSubmitHandler, isDisabled }) => {
    return (
        <div className="col-12 my-3 justify-content-center align-items-center d-flex">
            <Button className="me-2" variant="normal" iconName="refresh" onClick={() => onResetHandler(true)}><b>Reset</b></Button>
            <Button variant="primary" type="button" disabled={isDisabled} onClick={() => onSubmitHandler()}><b>Generate</b></Button>
        </div >
    )
}
