import {FormControl, InputLabel, SimplePaletteColorOptions} from "@mui/material";
import * as React from "react";
import {SelectProps} from "@mui/material/Select/Select";
import {PaletteColorKey} from "../constants.ts";
import {FormControlOwnProps} from "@mui/material/FormControl/FormControl";
import DemoSelect from "./DemoSelect.tsx";

export interface DemoSelectorProps {
    color?: 'primary' | 'secondary';
    label?: string;
    fullWidth?: boolean;
    children?: React.ReactNode;
    handleChange?: (value: string | number | any) => void;
    value?: string | number | any;
    selectProps?: Pick<SelectProps, | 'defaultOpen' | 'defaultValue' | 'multiple'>
}

const DemoSelector = ({
                          selectProps,
                          children,
                          label,
                          color = 'primary',
                          fullWidth = true,
                          value = '',
                          disabled,
                          handleChange,
                          ...formControlProps
                      }: DemoSelectorProps & Omit<FormControlOwnProps, 'variant' | 'sx'>) => {
    return (
        <FormControl
            fullWidth={fullWidth} variant="standard" {...formControlProps} disabled={disabled}>
            {label && <InputLabel
                disableAnimation
                shrink
                sx={{
                    marginLeft: 2,
                    color: (theme) => (theme.palette[color as PaletteColorKey] as SimplePaletteColorOptions).main,
                    fontWeight: 'bold'
                }}>{label}</InputLabel>}
            <DemoSelect color={color} disabled={disabled} {...selectProps} handleChange={handleChange} value={value}>
                {children}
            </DemoSelect>
        </FormControl>
    )
}

export default DemoSelector;