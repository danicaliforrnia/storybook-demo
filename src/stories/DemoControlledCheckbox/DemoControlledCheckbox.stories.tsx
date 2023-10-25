import type {Meta, StoryObj} from '@storybook/react';
import DemoControlledCheckbox from "./DemoControlledCheckbox.tsx";
import {FormGroup} from "@mui/material";

const meta = {
    title: 'DemoControlledCheckbox',
    component: DemoControlledCheckbox,
    tags: ['autodocs'],
    argTypes: {
        checked: {control: 'boolean'},
        disabled: {control: 'boolean', defaultValue: false},
    },
} satisfies Meta<typeof DemoControlledCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'A',
        value: 'A'
    }
};

// @ts-ignore
export const Group: Story = {
    render: () => <FormGroup>
        <DemoControlledCheckbox label="A"/>
        <DemoControlledCheckbox label="B"/>
        <DemoControlledCheckbox label="C" disabled/>
    </FormGroup>
};

