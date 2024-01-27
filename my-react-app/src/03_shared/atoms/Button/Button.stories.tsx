/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Button, ButtonProps} from './Button';

const meta: Meta<ButtonProps> = {
    component: Button,
    title: 'Button',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Button/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}