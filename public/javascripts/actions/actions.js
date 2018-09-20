import * as types from "./actionTypes"
import AutoService from "../services/AutoService"
import TrendsService from "../services/TrendsService"
import StatsService from "../services/StatsService"

export function ToCheckListAction(){
    return {
        type: types.TO_CHECK_LIST
    }
}

export function ToTagFinderAction() {
    return {
        type: types.TO_TAG_FINDER
    }
}

export function RestartSteps(){
    return{
        type: types.RESTART_STEPS
    }
}

export function ExecuteStep(stepNum, executed){
    return{
        type: types.EXECUTE_STEP,
        payload: {stepNum, executed}
    }
}

export function ToggleStep(stepNum, opened){
    return{
        type: types.TOGGLE_STEP,
        payload: {stepNum, opened}
    }
}

export function ChangeFindText(text){
    return{
        type: types.CHANGE_FIND_TEXT,
        payload: text
    }
}

export function ChangeTrends(data){
    return{
        type: types.CHANGE_TRENDS,
        payload: data
    }
}

export function ChangeYandexAuto(data){
    return{
        type: types.CHANGE_YANDEX_AUTO,
        payload: data
    }
}

export function ChangeYoutubeAuto(data){
    return{
        type: types.CHANGE_YOUTUBE_AUTO,
        payload: data
    }
}

export function ChangeGoogleAuto(data){
    return{
        type: types.CHANGE_GOOGLE_AUTO,
        payload: data
    }
}

export function ChangeTagScore(data){
    return{
        type: types.CHANGE_TAG_SCORE,
        payload: data
    }
}

export function ChangeYoutubePopular(data){
    return{
        type: types.CHANGE_YOUTUBE_POPULAR,
        payload: data
    }
}


export function RequestTagStatistics(tag) {
    return (dispatch) => {

        dispatch({
            type: types.TAG_STATISTICS_REQUEST
        });

        StatsService.getPopularAndScore(tag,
            (data)=>{
                dispatch(ChangeYoutubePopular(data));
            },
            (data)=>{
                dispatch(ChangeTagScore(data));
            }
        );

        TrendsService.getTrends(tag,(data)=>{
            dispatch(ChangeTrends(data));
        });

        AutoService.searchYandexAuto(tag, (data)=>{
            dispatch(ChangeYandexAuto(data));
        });

        AutoService.searchGoogleAuto(tag,(data)=> {
            dispatch(ChangeGoogleAuto(data));
        });

        AutoService.searchYoutubeAuto(tag,(data)=> {
            dispatch(ChangeYoutubeAuto(data));
        });
    }
}