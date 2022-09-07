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
	UNIQUE_ID: "UNIQUE_ID",
	FIELD_1_ID: "FIELD_1_ID",
	FIELD_2_ID: "FIELD_2_ID",
	FIELD_3_ID: "FIELD_3_ID",
	FIELD_4_ID: "FIELD_4_ID",
	FIELD_5_ID: "FIELD_5_ID",
	FIELD_6_ID: "FIELD_6_ID",
	FIELD_7_ID: "FIELD_7_ID",
	FIELD_8_ID: "FIELD_8_ID",
	FIELD_9_ID: "FIELD_9_ID",
	FIELD_10_ID: "FIELD_10_ID",
	FIELD_11_ID: "FIELD_11_ID",
	FIELD_12_ID: "FIELD_12_ID",
	FIELD_13_ID: "FIELD_13_ID",
	FIELD_14_ID: "FIELD_14_ID",
	UNIQUE_LABEL: "ID",
	FIELD_1_LABEL: "Project No.",
	FIELD_2_LABEL: "PO No.",
	FIELD_3_LABEL: "PO Line Item",
	FIELD_4_LABEL: "Part No.",
	FIELD_5_LABEL: "Allocation week",
	FIELD_6_LABEL: "Quantity",
	FIELD_7_LABEL: "Vendor",
	FIELD_8_LABEL: "Pallet_Barcode Seq No.",
	FIELD_9_LABEL: "Container/Flat Bed Number",
	FIELD_10_LABEL: "ASN Number",
	FIELD_11_LABEL: "Bill of Lading Number",
	FIELD_12_LABEL: "Pallet/Tube Bundle Number",
	FIELD_13_LABEL: "Master Shipment Number",
	FIELD_14_LABEL: "Location"
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
