/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Text, TextProps} from './Text';

const meta: Meta<TextProps> = {
    component: Text,
    title: 'shared/atoms/Text',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Text
                size={'s'}
                uppercase={false}
                bold={false}
                color={'black'}
                font={'openSans'}
            >
                Text
            </Text>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}