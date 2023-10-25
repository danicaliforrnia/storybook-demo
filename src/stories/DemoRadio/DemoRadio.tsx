import {Radio, SimplePaletteColorOptions} from "@mui/material";
import {PaletteColorKey} from "../constants.ts";

export interface CustomStandaloneRadioProps {
    value?: unknown;
    name?: string;
    checked?: boolean;
    color?: 'primary' | 'secondary';
    borderColor?: 'primary' | 'secondary';
    handleChange?: (checked: boolean) => void;
}

const DemoRadio = ({
                       handleChange,
                       color = 'secondary',
                       borderColor = 'primary',
                       ...props
                   }: CustomStandaloneRadioProps) => {
    return (
        <Radio
            {...props}
            color={color}
            onChange={(_, checked) => handleChange && handleChange(checked)}
            sx={{
                '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                    {
                        color: (theme) => (theme.palette[borderColor as PaletteColorKey] as SimplePaletteColorOptions).main
                    },
            }}
        />
    )
}

export default DemoRadio;