export const downloadQRCode = (container, vessel, tube, location) => {
	const canvas = document.getElementById("qr-gen");
	const pngUrl = canvas
		.toDataURL("image/png")
		.replace("image/png", "image/octet-stream");

	let downloadLink = document.createElement("a");
	downloadLink.href = pngUrl;
	downloadLink.download = `${container + "_" + vessel + "_" + tube + "_" + location
		}.png`;

	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
};
