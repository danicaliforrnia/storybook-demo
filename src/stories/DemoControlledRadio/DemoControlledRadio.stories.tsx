import type {Meta, StoryObj} from '@storybook/react';
import DemoControlledRadio from "./DemoControlledRadio.tsx";
import {FormControl, FormGroup, FormLabel, RadioGroup} from "@mui/material";
import React, {useState} from "react";

const meta = {
    title: 'DemoControlledRadio',
    component: DemoControlledRadio,
    tags: ['autodocs'],
    argTypes: {
        checked: {control: 'boolean'},
        disabled: {control: 'boolean', defaultValue: false},
    },
} satisfies Meta<typeof DemoControlledRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'A',
        value: 'A'
    }
};

export const Group: Story = {
    render: () => {
        const [value, setValue] = useState("A");
        return (
            <FormControl>
                <FormLabel id="demo-controlled-radio-">Radio Group</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={(_, radioValue) => setValue(radioValue)}
                >
                    <DemoControlledRadio value="A" label="A"/>
                    <DemoControlledRadio value="B" label="B"/>
                    <DemoControlledRadio value="C" label="C" disabled/>
                </RadioGroup>
            </FormControl>
        )
    }
};

