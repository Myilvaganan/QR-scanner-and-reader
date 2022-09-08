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
import Button from '@mui/material/Button';

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

export const GenerateScanButtonComponent = ({ handler }) => {
    return (
        <div className="col-12 d-flex justify-content-center align-items-center">
            <Button className="me-2" size="medium" variant="contained" onClick={() => handler(GENERATE)}><b> {GENERATE_TEXT}</b></Button>
            <Button size="medium" variant="outlined" color="secondary" onClick={() => handler(SCANNER)}> <b>  {SCAN_TEXT}</b></Button>
        </div>
    )
}


export const SubmitResetButton = ({ onResetHandler, onSubmitHandler, isDisabled }) => {
    return (
        <div className="col-12 my-3 justify-content-center align-items-center d-flex">
            <Button className="me-2" size="medium" variant="outlined" color="error" onClick={() => onResetHandler(true)}><b>Reset</b></Button>
            <Button size="medium" variant="contained" disabled={isDisabled} color="success" onClick={() => onSubmitHandler()}><b>Generate</b></Button>
        </div >
    )
}
