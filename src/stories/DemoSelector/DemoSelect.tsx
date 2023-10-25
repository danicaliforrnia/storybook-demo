import {Select, SimplePaletteColorOptions} from "@mui/material";
import DownArrowIcon from "../DemoAccordion/DownArrowIcon.tsx";
import {PaletteColorKey} from "../constants.ts";
import {DemoSelectorStyled} from "./DemoSelector.styled.tsx";
import * as React from "react";
import {SelectProps} from "@mui/material/Select/Select";

export interface DemoSelectProps {
    color?: 'primary' | 'secondary';
    disabled?: boolean;
    value?: string | number | any;
    children?: React.ReactNode;
    placeholder?: string;
    handleChange?: (value: string | number | any) => void;
}

const DemoSelect = ({
                        value = '',
                        color = 'primary',
                        children,
                        handleChange,
                        disabled,
                        placeholder = '',
                        ...props
                    }: DemoSelectProps & Pick<SelectProps, | 'defaultOpen' | 'defaultValue' | 'multiple'>) => {
    console.log(value);
    return (
        <Select
            notched
            {...props}
            sx={{
                '& .MuiSelect-icon': {
                    top: 4,
                    marginRight: 2,
                    height: 35,
                    width: 35
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
    )
}

export default DemoSelect;