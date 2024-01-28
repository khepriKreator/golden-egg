import {App} from './App';

const meta = {
    component: App,
    title: 'app/App',
};

export default meta;


export const Component = () => {
    return (
        <>
            <App/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}