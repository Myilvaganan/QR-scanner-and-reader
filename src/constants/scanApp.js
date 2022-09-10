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
	FIELD_1_LABEL: "Project Number",
	FIELD_2_LABEL: "PO Number",
	FIELD_3_LABEL: "PO Line Item",
	FIELD_4_LABEL: "Part Number",
	FIELD_5_LABEL: "Allocation week",
	FIELD_6_LABEL: "Quantity",
	FIELD_7_LABEL: "Vendor",
	FIELD_8_LABEL: "Pallet_Barcode Seq Number",
	FIELD_9_LABEL: "Container/Flat Bed Number",
	FIELD_10_LABEL: "ASN Number",
	FIELD_11_LABEL: "Bill of Lading Number",
	FIELD_12_LABEL: "Pallet/Tube Bundle Number",
	FIELD_13_LABEL: "Master Shipment Number",
	FIELD_14_LABEL: "Location"
}

const QR_Parameters = {
	id: "qr-gen",
	size: 200,
	level: "L",
	includeMargin: true
}

const QR_SCANNER_WIDTH = "300px";

const QR_Size_items = [
	{ text: "200 * 200", id: 200 },
	{ text: "300 * 300", id: 300 },
	{ text: "400 * 400", id: 400 },
	{ text: "500 * 500", id: 500 },
	{ text: "600 * 600", id: 600 },
	{ text: "700 * 700", id: 700 },
	{ text: "800 * 800", id: 800 },
	{ text: "900 * 900", id: 900 },
	{ text: "1000 * 1000", id: 1000 }
]

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
	QR_SCANNER_WIDTH,
	QR_Size_items
}
