import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

describe('With React Testing Library', () => {
    const initialState = { state: '' },
        mockStore = configureStore();
    let store;

    it('Shows "Welcome text"', () => {
        store = mockStore(initialState)
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>);
        expect(getByText('Welcome to')).not.toBeNull()
    })
})