import React from 'react';
import {tagFinderInitState} from "../initialState"
import tagFinderReducer from "../tagFinderReducer"
import * as types from "../../actions/actionTypes"

test('StepsReducer Toggle actions', () => {

    let action = {
        type: types.CHANGE_FIND_TEXT,
        payload: "test"
    };

    expect(tagFinderReducer(tagFinderInitState, action)).toEqual({
        ...tagFinderInitState,
        findText: "test",
    });
});