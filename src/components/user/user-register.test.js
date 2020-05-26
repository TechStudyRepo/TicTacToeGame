import React, { Component } from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import UserForm from './user-register';

configure({ adapter: new Adapter() });

describe('User Component', () => {
    const initialState = { state: '' },
        mockStore = configureStore();
    let store;

    test('should check render of User Component', () => {
        store = mockStore(initialState)
        const wrapper = shallow(<Provider store={store}>
            <UserForm />
        </Provider>);
        expect(wrapper.exists()).toBe(true);
    });

    test('should render UserForm component, check for input', () => {
        store = mockStore(initialState);
        const wrapper = mount(<Provider store={store}>
            <UserForm />
        </Provider>);
        // console.log(wrapper.debug());
        expect(wrapper.find('#p1').first().exists()).toEqual(true);
    });
})
