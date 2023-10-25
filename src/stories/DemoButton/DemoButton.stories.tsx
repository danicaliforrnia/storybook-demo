import type {Meta, StoryObj} from '@storybook/react';
import DemoButton from "./DemoButton.tsx";

const meta = {
    title: 'DemoButton',
    component: DemoButton,
    tags: ['autodocs'],
    argTypes: {
        color: {control: 'select', options: ['primary', 'secondary'], defaultValue: 'primary'},
        light: {control: 'boolean'},
        size: {control: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium'}
    },
} satisfies Meta<typeof DemoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        color: 'primary',
        children: "Primary Button"
    },
};

export const Secondary: Story = {
    args: {
        color: 'secondary',
        children: "Secondary Button"
    },
};

export const Light: Story = {
    args: {
        color: 'primary',
        light: true,
        children: "Light Button"
    },
};

