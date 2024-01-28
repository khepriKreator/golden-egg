/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {About, AboutProps} from './About';

const meta: Meta<AboutProps> = {
    component: About,
    title: 'About',
};

export default meta;


export const Component = () => {
    return (
        <>
            <About/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}