import type {Meta, StoryObj} from '@storybook/react';
import DemoTitle from "./DemoTitle.tsx";

const meta = {
    title: 'DemoTitle',
    component: DemoTitle,
    tags: ['autodocs'],
    argTypes: {
        color: {control: 'select', options: ['primary', 'secondary'], defaultValue: 'primary'},
        align: {control: 'select', options: ['inherit', 'left', 'center', 'right', 'justify'], defaultValue: 'left'},
    },
} satisfies Meta<typeof DemoTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        color: 'primary',
        children: "Primary Title"
    },
};

export const Secondary: Story = {
    args: {
        color: 'secondary',
        children: "Secondary Title"
    },
};

export const InlineTitle: Story = {
    render: () => <div>
        <DemoTitle color='primary' inline>SISTEMAZIONI</DemoTitle> <DemoTitle color='secondary' inline>ITINERARIO
        ANDATA</DemoTitle>
    </div>
};

