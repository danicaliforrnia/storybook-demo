import type {Meta, StoryObj} from '@storybook/react';
import DemoRadio from "./DemoRadio.tsx";

const meta = {
    title: 'DemoRadio',
    component: DemoRadio,
    tags: ['autodocs'],
    argTypes: {
        color: {control: 'select', options: ['primary', 'secondary'], defaultValue: 'secondary'},
        borderColor: {control: 'select', options: ['primary', 'secondary'], defaultValue: 'primary'},
    },
} satisfies Meta<typeof DemoRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
