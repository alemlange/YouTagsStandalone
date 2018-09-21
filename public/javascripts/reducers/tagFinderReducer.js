import dotProp from "dot-prop-immutable";
import {tagFinderInitState} from "./initialState"
import * as types from "../actions/actionTypes"

function tagFinderReducer(state = tagFinderInitState, action){

    switch(action.type){

        case types.CHANGE_FIND_TEXT:{
            return dotProp.set(state, `findText`, action.payload);
        }

        case types.TAG_STATISTICS_REQUEST:{
            let newState = dotProp.set(state, `isFired`, true);
            newState = dotProp.set(newState,"popular.youtube", []);
            newState = dotProp.set(newState,"popular.trends", []);
            newState = dotProp.set(newState,"autoSugest.google", []);
            newState = dotProp.set(newState,"autoSugest.yandex", []);
            newState = dotProp.set(newState,"autoSugest.youtube", []);
            return dotProp.set(newState, `isFetchingData`, true);
        }

        case types.TAG_STATISTICS_FAILED:{
            let newState = dotProp.set(state, `isFired`, false);
            return dotProp.set(newState, `isFetchingData`, false);
        }

        case types.CHANGE_TAG_SCORE:{
            let newState = dotProp.set(state, `isFetchingData`, false);
            return dotProp.set(newState, `tagRating`, action.payload);
        }

        case types.CHANGE_YANDEX_AUTO:{
            return dotProp.set(state, `autoSugest.yandex`, action.payload);
        }

        case types.CHANGE_GOOGLE_AUTO:{
            return dotProp.set(state, `autoSugest.google`, action.payload);
        }
        case types.CHANGE_YOUTUBE_AUTO:{
            return dotProp.set(state, `autoSugest.youtube`, action.payload);
        }

        case types.CHANGE_TRENDS:{
            return dotProp.set(state, `popular.trends`, action.payload);
        }

        case types.CHANGE_YOUTUBE_POPULAR:{
            return dotProp.set(state, `popular.youtube`, action.payload);
        }

        default:
            return state;
    }
}

export default tagFinderReducer;