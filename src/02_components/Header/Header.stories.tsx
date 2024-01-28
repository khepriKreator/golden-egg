/* eslint i18next/no-literal-string: "off" */
import {Header} from './Header';

const meta = {
    component: Header,
    title: 'components/Header',
};

export default meta;


export const Component = () => {
    return (
        <>
            <Header/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}