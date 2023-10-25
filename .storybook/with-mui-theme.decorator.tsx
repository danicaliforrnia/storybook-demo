import theme from "../src/theme";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@emotion/react";

// @ts-ignore
export const withMuiTheme = (Story) => (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Story/>
    </ThemeProvider>
);