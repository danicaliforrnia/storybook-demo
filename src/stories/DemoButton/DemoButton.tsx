import {ReactNode} from "react";
import {DemoButtonStyled} from "./DemoButton.styled.tsx";
import {SimplePaletteColorOptions, Theme} from "@mui/material";
import {PaletteColorKey} from "../constants.ts";
import {ButtonProps} from "@mui/material/Button/Button";
import {ColorPartial} from "@mui/material/styles/createPalette";


export interface CustomButtonsProps {
    children?: ReactNode;
    light?: boolean;
}

const CustomButton = ({
                          children,
                          variant = 'contained',
                          color = 'primary',
                          size = 'medium',
                          sx,
                          light,
                          ...props
                      }: CustomButtonsProps & ButtonProps) => {
    const sxStyle = light ? {
        ...sx,
        'background': (theme: Theme) => `linear-gradient(${(theme.palette[color as PaletteColorKey] as SimplePaletteColorOptions).light}, ${(theme.palette[color as PaletteColorKey] as ColorPartial)["200"]})`
    } : {...sx};

    return (
        <DemoButtonStyled variant={variant}
                          color={color}
                          size={size}
                          sx={sxStyle}
                          {...props}
        >{children}</DemoButtonStyled>
    )
}

export default CustomButton;