import {FormControl, Grid, MenuItem, RadioGroup, Typography} from "@mui/material";
import DemoTitle from "../stories/DemoTitle/DemoTitle.tsx";
import DemoButton from "../stories/DemoButton/DemoButton.tsx";
import DemoSelector from "../stories/DemoSelector/DemoSelector.tsx";
import DemoControlledCheckbox from "../stories/DemoControlledCheckbox/DemoControlledCheckbox.tsx";
import DemoControlledRadio from "../stories/DemoControlledRadio/DemoControlledRadio.tsx";
import {useState} from "react";

const FormContent = ({index}: { index: number }) => {
    const [value, setValue] = useState();

    return (
        <Grid container spacing={2}>
            <Grid item container spacing={2} justifyContent="flex-start" alignItems="flex-end">
                <Grid item>
                    <DemoTitle color="secondary">Passeggero {index}</DemoTitle>
                </Grid>

                <Grid item>
                    <Typography color="primary">ADULTO</Typography>
                </Grid>
            </Grid>

            <Grid item container spacing={2} alignItems="flex-end">
                <Grid item>
                    <DemoButton>Adulto (12+)</DemoButton>
                </Grid>

                <Grid item xs>
                    <DemoSelector label="SESSO" disabled placeholder="?">
                        <MenuItem value={1}>F</MenuItem>
                        <MenuItem value={2}>M</MenuItem>
                        <MenuItem value={3}>Other</MenuItem>
                    </DemoSelector>
                </Grid>

                <Grid item xs sm={12} md={8}>
                    <DemoSelector value={value}
                                  handleChange={value => setValue(value)}
                                  label="TIPOLOGIA SISTEMAZIONE"
                                  fullWidth
                                  placeholder="Scegli Sistemazione">
                        <MenuItem value={1}>Option A</MenuItem>
                        <MenuItem value={2}>Option B</MenuItem>
                        <MenuItem value={3}>Option C</MenuItem>
                    </DemoSelector>
                </Grid>
            </Grid>

            <Grid item container alignItems="center">
                <Grid item xs sm={4}>
                    <DemoControlledCheckbox label="Passeggero con Disabilità"/>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <FormControl>
                        <RadioGroup row>
                            <DemoControlledRadio value="A" label="Cabina Completa"/>
                            <DemoControlledRadio value="B" label="Esclusiva"/>
                            <DemoControlledRadio value="C" label="Posto letto"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FormContent;