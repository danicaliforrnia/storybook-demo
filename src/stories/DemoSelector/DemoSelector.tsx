import {FormControl, InputLabel, Select, SimplePaletteColorOptions} from "@mui/material";
import {DemoSelectorStyled} from "./DemoSelector.styled.tsx";
import * as React from "react";
import {SelectProps} from "@mui/material/Select/Select";
import {PaletteColorKey} from "../constants.ts";
import {FormControlOwnProps} from "@mui/material/FormControl/FormControl";
import DownArrowIcon from "../DemoAccordion/DownArrowIcon.tsx";

export interface DemoSelectorProps {
    color?: 'primary' | 'secondary';
    children?: React.ReactNode;
    label?: string;
    fullWidth?: boolean;
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
        <FormControl fullWidth={fullWidth} sx={{m: 1}} variant="standard" {...formControlProps} disabled={disabled}>
            {label && <InputLabel
                disableAnimation
                shrink
                sx={{
                    marginLeft: 2,
                    color: (theme) => (theme.palette[color as PaletteColorKey] as SimplePaletteColorOptions).main,
                    fontWeight: 'bold'
                }}>{label}</InputLabel>}
            <Select
                notched
                {...selectProps}
                sx={{
                    '& .MuiSelect-icon': {
                        top: 0,
                        marginRight: 2
                    }
                }}
                IconComponent={(props) => (
                    <DownArrowIcon {...props} />
                )}
                value={value || ''}
                onChange={(e) => handleChange && handleChange(e.target.value)}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            border: '2px solid',
                            borderRadius: 5,
                            borderColor: (theme) => (theme.palette[color as PaletteColorKey] as SimplePaletteColorOptions).main,
                            marginTop: 1,
                            '& .MuiMenuItem-root': {
                                color: (theme) => (theme.palette[color as PaletteColorKey] as SimplePaletteColorOptions).main,
                                fontWeight: 'bold',
                            },
                        },
                    },
                }}
                input={<DemoSelectorStyled disabled={disabled} color={color}/>}
            >
                {children}
            </Select>
        </FormControl>
    )
}

export default DemoSelector;