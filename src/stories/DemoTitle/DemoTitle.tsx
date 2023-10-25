import {ReactNode} from "react";
import {Typography} from "@mui/material";


export interface DemoTitleProps {
    children?: ReactNode;
    color?: 'primary' | 'secondary';
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    inline?: boolean
}

const DemoTitle = ({children, color = 'primary', align = 'inherit', inline = false}: DemoTitleProps) => {
    return (
        <Typography display={inline ? 'inline' : ''}
                    color={color}
                    fontSize={24}
                    fontWeight={700}
                    align={align}>{children}</Typography>
    )
}

export default DemoTitle;