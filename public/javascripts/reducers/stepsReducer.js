import dotProp from "dot-prop-immutable";
import {stepsInitState} from "./initialState"
import * as types from "../actions/actionTypes"

function stepsReducer(state = stepsInitState, action){

    switch(action.type){
        case types.TO_CHECK_LIST:
            return {...state,checkListActive: true};

        case types.TO_TAG_FINDER:
            return {...state,checkListActive: false};

        case types.EXECUTE_STEP:{
            return dotProp.set(state, `checkList.${action.payload.stepNum}.executed`, action.payload.executed);
        }

        case types.TOGGLE_STEP:{
            return dotProp.set(state, `checkList.${action.payload.stepNum}.opened`, action.payload.opened);
        }
        //switch all steps executed state to false
        case types.RESTART_STEPS:{
            let newState = {...state};
            for(let i=0;i<state.checkList.length;i++) {
                newState = dotProp.set(newState, `checkList.${i}.executed`, false);
            }
            return newState;
        }
        default:
            return state;
    }
}

export default stepsReducer;