import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Game from './game';
import PlayerDetails from './player-details';

configure({ adapter: new Adapter() });

describe('Result Component', () => {
    const initialState = {
        registerUser: {
            user: {
                user1: "P1",
                user2: "P2"
            }
        },
        player: 'P1'
    },
        mockStore = configureStore();
    let store;

    test("renders", () => {
        store = mockStore(initialState);
        const wrapper = shallow(<Provider store={store}>
            <Game />
        </Provider>);
        expect(wrapper.exists()).toBe(true);
    });

    test('should render search somponent', () => {
        store = mockStore(initialState);
        const wrapper = mount(<Provider store={store}>
            <Game />
        </Provider>);
        expect(wrapper.children(PlayerDetails).length).toEqual(0);
    });

    test('Test Snapshot', () => {
        store = mockStore(initialState);
        const wrapper = shallow(<Provider store={store}>
            <Game />
        </Provider>);
        expect(wrapper).toMatchSnapshot();
    });

})
