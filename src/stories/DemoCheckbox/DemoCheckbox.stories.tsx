import type {Meta, StoryObj} from '@storybook/react';
import DemoCheckbox from "./DemoCheckbox.tsx";

const meta = {
    title: 'DemoCheckbox',
    component: DemoCheckbox,
    tags: ['autodocs'],
    argTypes: {
        checked: {control: 'boolean'},
        disabled: {control: 'boolean', defaultValue: false},
    },
} satisfies Meta<typeof DemoCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
