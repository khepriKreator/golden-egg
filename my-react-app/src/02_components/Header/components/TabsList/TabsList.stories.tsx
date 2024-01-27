/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {TabsList, TabsListProps} from './TabsList';

const meta: Meta<TabsListProps> = {
    component: TabsList,
    title: 'TabsList',
};

export default meta;


export const Component = () => {
    return (
        <>
            <TabsList/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}