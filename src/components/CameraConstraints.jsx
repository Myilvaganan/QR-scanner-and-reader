import React from "react";


const CameraConstraints = ({cameraConstraintHandler}) => {
	return (
		<select
			className="form-select w-50"
			aria-label="Default select example"
			onChange={(event) => cameraConstraintHandler(event.target.value)}
		>
			<option selected>Please select camera</option>
			<option value="user">Front Camera</option>
			<option value="environment">Back Camera</option>
		</select>
	)
}

export default CameraConstraints;
