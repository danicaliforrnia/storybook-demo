import {Alert, SimplePaletteColorOptions, styled} from "@mui/material";
import {PaletteColorKey} from "../constants.ts";

export const DemoInfoBoxStyled = styled(Alert)((props) => ({
    color: '#FFF',
    // @ts-ignore
    background: (props.theme.palette[props.boxColor as PaletteColorKey] as SimplePaletteColorOptions).light,
}));
