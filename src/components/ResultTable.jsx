import React, { useState, Fragment } from "react";
import { PLACE_HOLDER_TEXT, QRGenerateConstants } from "../constants/scanApp";
import Table from "@awsui/components-react/table";
import Box from "@awsui/components-react/box";
import Header from "@awsui/components-react/header";
import Pagination from "@awsui/components-react/pagination";
import ButtonComponent from "./ButtonComponent";
import Textarea from "@awsui/components-react/textarea"

const ResultTable = ({ scannedData }) => {
    const [textContent, setTextContent] = useState("");

    const generateRows = (values) => {
        const result = []
        Object.keys(values).filter(truthyVal => truthyVal).map((key, i) => {
            return values[key] && result.push({
                key: i,
                id: i + 1,
                particulars: QRGenerateConstants[key.replace("ID", "LABEL")],
                details: values[key]
            })
        }
        )
        return result ? result.filter(value => value) : []
    }

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
                items={scannedData ? generateRows(scannedData) : []}
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
                    <Header className="d-flex justify-content-center">
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
                            rows={1}
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
