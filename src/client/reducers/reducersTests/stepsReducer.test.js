import React from 'react';
import {stepsInitState} from "../initialState"
import stepsReducer from "../stepsReducer"
import * as types from "../../actions/actionTypes"

test('StepsReducer Toggle actions', () => {

    let action = {
        type: types.TO_CHECK_LIST
    };

    expect(stepsReducer(stepsInitState, action)).toEqual({
        ...stepsInitState,
        checkListActive: true,
    });

    action = {
        type: types.TO_TAG_FINDER
    };

    expect(stepsReducer(stepsInitState, action)).toEqual({
        ...stepsInitState,
        checkListActive: false,
    });
});