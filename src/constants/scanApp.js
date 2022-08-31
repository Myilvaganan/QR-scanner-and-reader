const GENERATE = "generate";
const SCANNER = "scanner";
const EMPTY = "";
const HOME_PATH = "../QR-scanner-and-reader"
const PLACE_HOLDER_TEXT = "Leave a comment here"
const CAMERA_CONSTRAINT_ENVIRONMENT = "environment"
const CAMERA_CONSTRAINT_USER = "user"
const GENERATE_TEXT = "Generate QR"
const SCAN_TEXT = "Scan QR"
const PREVIOUS_BTN_TEXT = "Previous"
const NEXT_BTN_TEXT = "Next"

const QRGenerateConstants = {
	CONTAINER_ID: "container",
	CONTAINER_LABEL: "Container Name",
	CONTAINER_PLACEHOLDER: "Enter Container Name",
	VESSEL_ID: "vessel",
	VESSEL_LABEL: "Vessel Number",
	VESSEL_PLACEHOLDER: "Enter Vessel Number",
	TUBE_ID: "tube",
	TUBE_LABEL: "Tube Number",
	TUBE_PLACEHOLDER: "Enter Tube Number",
	LOCATION_ID: "location",
	LOCATION_LABEL: "Location",
	LOCATION_PLACEHOLDER: "Enter Shipped Location",
	DOCUMENT_ID: "document",
	DOCUMENT_LABEL: "Document Number",
	DOCUMENT_PLACEHOLDER: "Enter Document Number",
	ORDER_ID: "order",
	ORDER_LABEL: "Order Number",
	ORDER_PLACEHOLDER: "Enter Order Number",
	TRACK_AND_TRACE_NUMBER_ID: "track_and_trace",
	TRACK_AND_TRACE_NUMBER_LABEL: "Track & Trace Number",
	TRACK_AND_TRACE_NUMBER_PLACEHOLDER: "Enter Track and Trace Number",
	SHIPMENT_NUMBER: "shipment",
	SHIPMENT_NUMBER_LABEL: "Shipment Number",
	SHIPMENT_NUMBER_PLACEHOLDER: "Enter Shipment Number"
}

const QR_Parameters = {
	id: "qr-gen",
	size: 290,
	level: "L",
	includeMargin: true
}

const QR_SCANNER_WIDTH = "300px";

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
	QR_Parameters,
	QR_SCANNER_WIDTH
}
