/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Contacts, ContactsProps} from './Contacts';

const meta: Meta<ContactsProps> = {
    component: Contacts,
    title: 'Contacts',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Contacts/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}