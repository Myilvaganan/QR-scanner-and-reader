const GENERATE = "generate";
const SCANNER = "scanner";
const EMPTY = "";
const HOME_PATH = "../QR-scanner-and-reader"
const PLACE_HOLDER_TEXT = "Leave a comment here"
const CAMERA_CONSTRAINT_ENVIRONMENT = "environment"
const CAMERA_CONSTRAINT_USER= "user"
const GENERATE_TEXT = "Generate QR"
const SCAN_TEXT = "Scan QR"
const PREVIOUS_BTN_TEXT = "Previous"
const NEXT_BTN_TEXT = "Next"

const QRGenerateConstants = {
	 CONTAINER_ID : "container",
	 CONTAINER_LABEL : "Container Name",
	 CONTAINER_PLACEHOLDER : "For Eg., ASP_WING_C",
	 VESSEL_ID : "vessel",
	 VESSEL_LABEL : "Vessel No.",
	 VESSEL_PLACEHOLDER : "For Eg., 123AFGHJ234",
	 TUBE_ID : "tube",
	 TUBE_LABEL : "Tube No.",
	 TUBE_PLACEHOLDER: "For Eg., 34567FGHJ",
	 LOCATION_ID : "location",
	 LOCATION_LABEL : "Location",
	 LOCATION_PLACEHOLDER : "Chennai, TamilNadu"
}

const QR_Parameters = {
	id: "qr-gen",
	size: 290,
	level: "L",
	includeMargin: true

}

export {
	GENERATE,
	SCANNER,
	HOME_PATH,
	EMPTY,
	PLACE_HOLDER_TEXT,
	CAMERA_CONSTRAINT_ENVIRONMENT,
	CAMERA_CONSTRAINT_USER,
	GENERATE_TEXT,
	SCAN_TEXT,
	PREVIOUS_BTN_TEXT,
	NEXT_BTN_TEXT,
	QRGenerateConstants,
	QR_Parameters
}
