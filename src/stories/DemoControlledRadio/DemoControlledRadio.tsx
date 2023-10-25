import {FormControlLabel, FormControlLabelProps} from "@mui/material";
import DemoRadio from "../DemoRadio/DemoRadio.tsx";

export interface CustomRadioProps {
    color?: 'primary' | 'secondary';
}

const DemoControlledRadio = ({
                                 color = 'secondary',
                                 ...props
                             }: CustomRadioProps & Omit<FormControlLabelProps, 'control'>) => {
    return (
        <FormControlLabel control={<DemoRadio color={color}/>}
                          {...props}

        />
    )
}

export default DemoControlledRadio;