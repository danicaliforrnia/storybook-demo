import DemoTitle, {DemoTitleProps} from "../stories/DemoTitle/DemoTitle.tsx";
import {Box} from "@mui/material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

const FormTitle = ({firstText, secondText, boxSx = {}, ...props}: { firstText: string, secondText: string, boxSx?: SxProps<Theme> } & DemoTitleProps) => (
    <Box sx={boxSx}>
        <DemoTitle color='primary' {...props} inline>{firstText} <DemoTitle  {...props}
                                                                             color='secondary'
                                                                             inline>{secondText}</DemoTitle></DemoTitle>
    </Box>
)
export default FormTitle;