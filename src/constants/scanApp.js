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
	CONTAINER_LABEL: "Container/Flat Bed Number",
	CONTAINER_PLACEHOLDER: "Enter Container/Flat Bed Number",
	VESSEL_ID: "vessel",
	VESSEL_LABEL: "Bill of Lading Number",
	VESSEL_PLACEHOLDER: "Enter Bill of Lading Number",
	TUBE_ID: "tube",
	TUBE_LABEL: "Pallet/Tube Bundle Number",
	TUBE_PLACEHOLDER: "Enter Pallet/Tube Bundle Number",
	LOCATION_ID: "location",
	LOCATION_LABEL: "Location",
	LOCATION_PLACEHOLDER: "Enter Location",
	DOCUMENT_ID: "document",
	DOCUMENT_LABEL: "Project Number",
	DOCUMENT_PLACEHOLDER: "Enter Project Number",
	ORDER_ID: "order",
	ORDER_LABEL: "ASN Number",
	ORDER_PLACEHOLDER: "Enter ASN Number",
	TRACK_AND_TRACE_NUMBER_ID: "track_and_trace",
	TRACK_AND_TRACE_NUMBER_LABEL: "Allocation Week",
	TRACK_AND_TRACE_NUMBER_PLACEHOLDER: "Enter Allocation Week",
	SHIPMENT_NUMBER: "shipment",
	SHIPMENT_NUMBER_LABEL: "Master Shipment Number",
	SHIPMENT_NUMBER_PLACEHOLDER: "Enter Master Shipment Number"
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
