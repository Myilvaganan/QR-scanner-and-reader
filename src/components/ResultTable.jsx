import React, { useEffect, useState, Fragment } from "react";
import { PLACE_HOLDER_TEXT, QRGenerateConstants } from "../constants/scanApp";
import Table from "@awsui/components-react/table";
import Box from "@awsui/components-react/box";
import Header from "@awsui/components-react/header";
import Pagination from "@awsui/components-react/pagination";
import ButtonComponent from "./ButtonComponent";
import Textarea from "@awsui/components-react/textarea"

const ResultTable = ({ scannedData }) => {
    const [items, setItems] = useState([]);
    const [textContent, setTextContent] = useState("")

    const generateRows = (values) => {
        return Object.keys(values).map((key, i) => {
            return values[key] && {
                key: i,
                id: i + 1,
                particulars: QRGenerateConstants[key.replace("ID", "LABEL")],
                details: values[key]
            }
        }
        )
    }

    useEffect(() => {
        let isMount = true;
        if (isMount && scannedData) {
            setItems(generateRows(scannedData))
        }
        return () => {
            isMount = false
        };
    }, [scannedData])

    return (
        <div className="table-container">
            <Table
                columnDefinitions={[
                    {
                        id: "id",
                        header: "S.No",
                        cell: e => e.id,
                    },
                    {
                        id: "particulars",
                        header: "Particulars",
                        cell: e => e.particulars
                    },
                    {
                        id: "details",
                        header: "Details",
                        cell: e => e.details
                    }
                ]}
                id="table"
                items={items}
                loadingText="Loading resources"
                trackBy="name"
                variant="container"
                visibleColumns={[
                    "id",
                    "particulars",
                    "details"
                ]}
                empty={
                    <Box textAlign="center" color="inherit">
                        <Box
                            padding={{ bottom: "s" }}
                            variant="b"
                            color="inherit"
                        >
                            Scanned QR doesn't contain a valid data
                        </Box>
                    </Box>
                }
                header={
                    <Header>
                        Shipment Details
                    </Header>
                }
                footer={
                    <Fragment>
                        <Textarea
                            value={textContent}
                            onChange={(event) => setTextContent(event.detail.value)}
                            placeholder={PLACE_HOLDER_TEXT}
                            id="floatingTextarea"
                        ></Textarea>
                        <ButtonComponent />
                    </Fragment>}
                pagination={
                    <Pagination
                        currentPageIndex={1}
                        ariaLabels={{
                            nextPageLabel: "Next page",
                            previousPageLabel: "Previous page",
                            pageLabel: pageNumber =>
                                `Page ${pageNumber} of all pages`
                        }}
                    />
                }
            />

        </div>
    );
};

export default ResultTable;
