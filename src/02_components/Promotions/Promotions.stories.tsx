/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Promotions, PromotionsProps} from './Promotions';

const meta: Meta<PromotionsProps> = {
    component: Promotions,
    title: 'Promotions',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Promotions/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}