import {FormControlLabel, FormControlLabelProps} from "@mui/material";
import DemoCheckbox from "../DemoCheckbox/DemoCheckbox.tsx";

export const DemoControlledCheckbox = ({disabled, ...props}: Omit<FormControlLabelProps, 'control'>) => {
    return (
        <FormControlLabel disabled={disabled} control={<DemoCheckbox disabled={disabled}/>} {...props} />
    )
};

export default DemoControlledCheckbox;