import {ReactNode} from "react";
import {DemoInfoBoxStyled} from "./DemoInfoBox.styled.tsx";
import InfoIcon from "./InfoIcon.tsx";

export interface InfoBoxProps {
    children?: ReactNode;
    hideIcon?: boolean;
    color?: 'primary' | 'secondary';
}

const DemoInfoBox = ({children, hideIcon, color = 'primary'}: InfoBoxProps) => {
    return (
        <DemoInfoBoxStyled
            // @ts-ignore
            boxColor={color}
            icon={!hideIcon ? <InfoIcon/> : false}
            severity="info">{children}</DemoInfoBoxStyled>
    )
}

export default DemoInfoBox;