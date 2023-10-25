import type {Meta, StoryObj} from '@storybook/react';
import DemoSelector from "./DemoSelector.tsx";
import {MenuItem} from "@mui/material";

const meta = {
    title: 'DemoSelector',
    component: DemoSelector,
    tags: ['autodocs'],
    argTypes: {
        label: {control: 'text'},
        disabled: {control: 'boolean', defaultValue: false}
    },
} satisfies Meta<typeof DemoSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    render: ({label, disabled}) => <>
        <DemoSelector label={label || 'SELEZIONA'} disabled={disabled}>
            <MenuItem value={1}>Option A</MenuItem>
            <MenuItem value={2}>Option B</MenuItem>
            <MenuItem value={3}>Option C</MenuItem>
        </DemoSelector>
    </>
};