/* eslint i18next/no-literal-string: "off" */
import {About} from './About';

const meta = {
    component: About,
    title: 'components/About',
};

export default meta;


export const Component = () => {
    return (
        <>
            <About/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}