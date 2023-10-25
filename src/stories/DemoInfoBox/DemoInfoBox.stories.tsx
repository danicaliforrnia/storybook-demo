import type {Meta, StoryObj} from '@storybook/react';
import DemoInfoBox from "./DemoInfoBox.tsx";

const meta = {
    title: 'DemoInfoBox',
    component: DemoInfoBox,
    tags: ['autodocs'],
    argTypes: {
        color: {control: 'select', options: ['primary', 'secondary'], defaultValue: 'primary'},
        hideIcon: {control: 'boolean'},
    },
} satisfies Meta<typeof DemoInfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
};

export const IconHidden: Story = {
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        hideIcon: true
    },
};
