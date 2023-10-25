import {ReactNode, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import DownArrowIcon from "./DownArrowIcon.tsx";

export interface DemoAccordionProps {
    title?: string;
    children?: ReactNode;
}

const DemoAccordion = ({title, children}: DemoAccordionProps) => {
    const [expanded, setExpanded] = useState(true);
    return (
        <Accordion
            expanded={expanded}
            sx={{
                borderTopLeftRadius: '50px !important',
                borderTopRightRadius: '50px !important',
                borderBottomLeftRadius: `${expanded ? '0' : 50}px !important`,
                borderBottomRightRadius: `${expanded ? '0' : 50}px !important`,
                color: '#fff',
                background: '#edf4fc',
            }} onChange={(_, value) => setExpanded(value)}>
            <AccordionSummary
                sx={{
                    height: '86px',
                    borderRadius: '50px',
                    background: (theme) => theme.palette.primary.main
                }}
                expandIcon={<DownArrowIcon/>}
            >
                {title && <Typography marginLeft={2} fontSize={20}>{title}</Typography>}
            </AccordionSummary>
            <AccordionDetails
            >
                <Typography color='primary'>
                    {children}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default DemoAccordion;