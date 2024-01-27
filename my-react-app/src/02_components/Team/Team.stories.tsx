/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Team, TeamProps} from './Team';

const meta: Meta<TeamProps> = {
    component: Team,
    title: 'Team',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Team/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}