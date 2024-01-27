/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Booking, BookingProps} from './Booking';

const meta: Meta<BookingProps> = {
    component: Booking,
    title: 'Booking',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Booking/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}