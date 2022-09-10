import React from 'react';
import { Box, Button, Popover, StatusIndicator } from '@awsui/components-react';

function CopyAndPaste({ innerContent }) {
    return (
        <span className="custom-wrapping d-flex">
            <p className="fs-3">QR ID: <b style={{ color: "#ec7211" }}>{innerContent}</b></p>
            <Box margin={{ right: 'xxs' }} display="inline-block">
                <Popover
                    size="small"
                    position="top"
                    triggerType="custom"
                    dismissButton={false}
                    content={<StatusIndicator type="success">copied</StatusIndicator>}
                >
                    <Button
                        variant="inline-icon"
                        iconName="copy"
                        onClick={() => {
                            navigator.clipboard.writeText(innerContent)
                        }}
                    />
                </Popover>
            </Box>
        </span>
    )
}

export default CopyAndPaste;