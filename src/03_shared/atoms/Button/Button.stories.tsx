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
        <div style={{background: 'lavender', display: 'flex', alignItems: 'center', columnGap: '50px', padding:'100px'}}>
            <Button variant={'colored'}>
                Button
            </Button>
            <Button variant={'outline'}>
                Button
            </Button>
            {/*
            <Button variant={null}>
                <svg>
                    <use href={'src/assets/sprite-svg/sprite-icons.svg#phone'}/>
                </svg>
            </Button>
            */}
        </div>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}