import {FormControl, FormLabel, InputLabel, SimplePaletteColorOptions} from "@mui/material";
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
    placeholder?: string;
    selectProps?: Pick<SelectProps, | 'defaultOpen' | 'defaultValue' | 'multiple'>
}

const DemoSelector = ({
                          selectProps,
                          children,
                          label,
                          placeholder,
                          color = 'primary',
                          fullWidth = true,
                          value = '',
                          disabled,
                          handleChange,
                          ...formControlProps
                      }: DemoSelectorProps & Omit<FormControlOwnProps, 'variant'>) => {
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
            {!value && <FormLabel
                onClick={(e) => e.preventDefault()}
                sx={{
                    marginLeft: '0.71em',
                    marginTop: '2em',
                    paddingLeft: '0.5em',
                    paddingRight: '0.44em',
                    fontSize: 16,
                    zIndex: 2,
                    position: 'absolute',
                    color: '#BDBDBD !important',
                    cursor: 'pointer',
                    pointerEvents: 'none'
                }}
            >
                {placeholder}
            </FormLabel>}
            <DemoSelect color={color}
                        disabled={disabled}
                        handleChange={handleChange}
                        value={value}
                        {...selectProps}>
                {children}
            </DemoSelect>
        </FormControl>
    )
}

export default DemoSelector;