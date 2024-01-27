/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {PrivateEvents, PrivateEventsProps} from './PrivateEvents';

const meta: Meta<PrivateEventsProps> = {
    component: PrivateEvents,
    title: 'PrivateEvents',
};

export default meta;


export const Component = () => {
    return (
        <>
            <PrivateEvents/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}