import type {Meta, StoryObj} from '@storybook/react';
import DemoAccordion from "./DemoAccordion.tsx";
import DemoTitle from "../DemoTitle/DemoTitle.tsx";
import {Typography} from "@mui/material";

const meta = {
    title: 'DemoAccordion',
    component: DemoAccordion,
    tags: ['autodocs'],
    argTypes: {
        title: {control: 'text'},
    },
} satisfies Meta<typeof DemoAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Accordion Component',
        children: <div>
            <DemoTitle color='primary' inline>SISTEMAZIONI</DemoTitle> <DemoTitle color='secondary' inline>ITINERARIO
            ANDATA</DemoTitle>
            <Typography>Testing accordion component</Typography>
            <Typography color="secondary">Testing accordion component with secondary</Typography>
        </div>
    },
};
