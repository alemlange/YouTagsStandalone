import React from 'react';
import YouTagsTool from '../YouTagsTool';
import {Provider} from "react-redux"
import store from "../../store"
import renderer from 'react-test-renderer';

test('YouTagsTool creation', () => {
    renderer.create(
        <Provider store={store}>
            <YouTagsTool/>
        </Provider>);
});