import {Typography} from "@mui/material";
import {TypographyOwnProps} from "@mui/material/Typography/Typography";

export type DemoTitleProps = Pick<TypographyOwnProps, 'color' | 'align' | 'sx' | 'children'> & {
    inline?: boolean
}

const DemoTitle = ({children, inline = false, ...props}: DemoTitleProps) => {
    return (
        <Typography display={inline ? 'inline' : ''}
                    {...props}
                    fontSize={24}
                    fontWeight={700}>{children}</Typography>
    )
}

export default DemoTitle;