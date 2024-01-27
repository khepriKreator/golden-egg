/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Menu, MenuProps} from './Menu';

const meta: Meta<MenuProps> = {
    component: Menu,
    title: 'Menu',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Menu/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}