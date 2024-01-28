/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {TabItem, TabItemProps} from './TabItem';

const meta: Meta<TabItemProps> = {
    component: TabItem,
    title: 'components/Header/components/TabItem',
};

export default meta;


export const Component = () => {
    return (
        <div style={{
            display: 'flex',
            backgroundColor: 'black',
        }}>
            <TabItem>
                о ресторане
            </TabItem>
            <TabItem>
                меню
            </TabItem>
            <TabItem>
                мероприятия
            </TabItem>
        </div>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}