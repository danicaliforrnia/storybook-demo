import './App.css'
import {Box, Grid, MenuItem, Typography} from "@mui/material";
import DemoAccordion from "./stories/DemoAccordion/DemoAccordion.tsx";
import FormTitle from "./FormTitle";
import FormContent from "./FormContent";
import DemoSelector from "./stories/DemoSelector/DemoSelector.tsx";
import DemoButton from "./stories/DemoButton/DemoButton.tsx";


function App() {
    return (
        <Box sx={{minWidth: '80vw'}}>
            <DemoAccordion title="SISTEMAZIONE PASSEGGERI">
                <FormTitle firstText="SITEMAZIONI" secondText="ITINERARIO ANDATA" boxSx={{textAlign: 'center'}}/>
                {
                    [...Array(3).keys()].map(index => (
                        <FormContent index={index + 1}/>
                    ))
                }
                <FormTitle firstText="SERVIZI" secondText="EXTRA" boxSx={{
                    marginTop: 2,
                    textAlign: 'center'
                }}/>
                <Box marginBottom={4}>
                    <Typography display="inline" color="secondary" fontWeight="bold">Nota: <Typography
                        display="inline" color="primary">Per portare il proprio animale domestico è
                        necessario acquistare,
                        oltre al
                        biglietto per l’animale, anche il servizio PET KIT</Typography></Typography>
                </Box>
                <Grid container spacing={4} alignItems="flex-end">
                    <Grid item sm={3} xs={12}>
                        <DemoSelector label="SELEZIONA"
                                      disabled
                                      placeholder="Seleziona servizio extra">
                            <MenuItem value={1}>F</MenuItem>
                            <MenuItem value={2}>M</MenuItem>
                            <MenuItem value={3}>Other</MenuItem>
                        </DemoSelector>
                    </Grid>
                    <Grid item xs={8}>
                        <DemoButton light>Aggiungi</DemoButton>
                    </Grid>
                </Grid>
            </DemoAccordion>
            <Typography marginTop={2}>Author: Daniel Stefanelli</Typography>
        </Box>
    )
}

export default App
