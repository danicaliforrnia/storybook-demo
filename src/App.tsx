import './App.css'
import {Box, Grid, MenuItem, Typography, useMediaQuery, useTheme} from "@mui/material";
import DemoAccordion from "./stories/DemoAccordion/DemoAccordion.tsx";
import FormTitle from "./FormTitle";
import FormContent from "./FormContent";
import DemoSelector from "./stories/DemoSelector/DemoSelector.tsx";
import DemoButton from "./stories/DemoButton/DemoButton.tsx";


function App() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('xs'));
    return (
        <Box sx={{minWidth: matches ? '80vw' : '955px'}}>
            <DemoAccordion title="SISTEMAZIONE PASSEGGERI">
                <FormTitle firstText="SITEMAZIONI" secondText="ITINERARIO ANDATA"/>
                {
                    [...Array(3).keys()].map(index => (
                        <FormContent index={index + 1}/>
                    ))
                }
                <FormTitle firstText="SERVIZI" secondText="EXTRA" boxSx={{
                    marginTop: 2
                }}/>
                <Box display="flex" alignItems="center" marginBottom={4}>
                    <Typography display="inline" align="left" color="secondary" fontWeight="bold">Nota: <Typography
                        display="inline" align="left" color="primary">Per portare il proprio animale domestico è
                        necessario acquistare,
                        oltre al
                        biglietto per l’animale, anche il servizio PET KIT</Typography></Typography>
                </Box>
                <Grid container spacing={2} alignItems="center">
                    <Grid item sm={4} xs={12}>
                        <DemoSelector label="SELEZIONA" disabled>
                            <MenuItem value={1}>F</MenuItem>
                            <MenuItem value={2}>M</MenuItem>
                            <MenuItem value={3}>Other</MenuItem>
                        </DemoSelector>
                    </Grid>
                    <Grid item sm={6}>
                        <DemoButton light>Aggiungi</DemoButton>
                    </Grid>
                </Grid>
            </DemoAccordion>
        </Box>
    )
}

export default App
