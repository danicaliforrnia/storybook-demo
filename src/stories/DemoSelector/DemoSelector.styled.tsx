import {InputBase, SimplePaletteColorOptions, styled} from "@mui/material";
import {PaletteColorKey} from "../constants.ts";

export const DemoSelectorStyled = styled(InputBase)(({theme, ...props}) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '&&& .MuiInputBase-input': {
        borderRadius: 20,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid',
        fontSize: 16,
        padding: '6px 18px 6px 18px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        borderColor: !props.disabled && (theme.palette[props.color as PaletteColorKey] as SimplePaletteColorOptions).main,
        color: !props.disabled && (theme.palette[props.color as PaletteColorKey] as SimplePaletteColorOptions).main,
        fontWeight: 'bold'
    },
}));
