import React from "react";
import {CAMERA_CONSTRAINT_ENVIRONMENT, CAMERA_CONSTRAINT_USER} from "../constants/scanApp";

const CameraConstraints = ({cameraConstraintHandler}) => {
	return (
		<select
			className="form-select w-50"
			aria-label="Select Camera"
			onChange={(event) => cameraConstraintHandler(event.target.value)}
		>
			<option selected>Select Camera</option>
			<option value={CAMERA_CONSTRAINT_USER}>Front Camera</option>
			<option value={CAMERA_CONSTRAINT_ENVIRONMENT}>Back Camera</option>
		</select>
	)
}

export default CameraConstraints;
