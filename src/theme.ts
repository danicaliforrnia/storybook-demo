import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        primary: {
            main: '#2F2482',
            light: '#2D7DD2',
            "200": '#75B8FF'
        },
        secondary: {
            main: '#FFB84D',
        },
    }
});

export default theme;