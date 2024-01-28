/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Button, ButtonProps} from './Button';

const meta: Meta<ButtonProps> = {
    component: Button,
    title: 'shared/atoms/Button',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Button variant={'colored'}>
                Button
            </Button>
            <Button variant={'outline'}>
                Button
            </Button>
            <Button variant={null}>
                <svg>
                    <use href={'my-react-app/src/assets/sprite-svg/sprite-icons.svg#downButton'}/>
                </svg>
            </Button>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}