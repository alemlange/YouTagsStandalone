import $ from "jquery";
import AutoService from "./services/AutoService"

export function ToCheckListAction(){
    return {
        type: "ToCheckList"
    }
}

export function ToTagFinderAction() {
    return {
        type: "ToTagFinder"
    }
}

export function RestartSteps(){
    return{
        type: "RestartSteps"
    }
}

export function ExecuteStep(stepNum, executed){
    return{
        type: "ExecuteStep",
        payload: {stepNum, executed}
    }
}

export function ToggleStep(stepNum, opened){
    return{
        type: "ToggleStep",
        payload: {stepNum, opened}
    }
}

export function ChangeFindText(text){
    return{
        type: "ChangeFindText",
        payload: text
    }
}

export function RequestTagStatistics(tag) {
    return (dispatch) => {

        dispatch({
            type: "TagStatisticsRequest"
        });

        $.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD8875J05trC_O6hssu5gDTRaM1ImKZEKU&maxResults=10&relevanceLanguage=ru&regionCode=ru&q=' + tag + '&part=snippet&type=video', function (data) {

            let allTags = [];
            let allIds = [];
            for (let i in data.items) {
                allIds.push(data.items[i].id.videoId);
            }

            for (let i in allIds) {
                $.ajax({
                    async: false,
                    url: 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD8875J05trC_O6hssu5gDTRaM1ImKZEKU&fields=items(snippet(title,description,tags))&part=snippet&id=' + allIds[i],
                    dataType: "json",
                    success: function (data) {
                        for (let i in data.items[0].snippet.tags) {
                            allTags.push(data.items[0].snippet.tags[i]);
                        }
                    }
                });
            }
            let map = new Map();
            allTags.forEach(a => map.set(a, (map.get(a) || 0) + 1));

            let uniqueKeys = allTags.filter(a => map.get(a) === 1);
            for (let i in uniqueKeys) {
                map.delete(uniqueKeys[i]);
            }

            let notUniqueTags = [];
            map.forEach((val, key) => notUniqueTags.push({ count: val, value: key }));

            for (let i = 0; i < notUniqueTags.length - 1; i++) {
                for (let j = 0; j < notUniqueTags.length - 1; j++) {
                    if (notUniqueTags[j].count < notUniqueTags[j + 1].count) {
                        let buf = { count: notUniqueTags[j + 1].count, value: notUniqueTags[j + 1].value };
                        notUniqueTags[j + 1].count = notUniqueTags[j].count;
                        notUniqueTags[j + 1].value = notUniqueTags[j].value;

                        notUniqueTags[j].count = buf.count;
                        notUniqueTags[j].value = buf.value;
                    }
                }
            }
            let topFiveTags = [];
            for (let i = 0; i < 5; i++) {
                if (notUniqueTags.length <= i)
                    break;
                topFiveTags.push(notUniqueTags[i]);
            }


            let youPopular = topFiveTags.map((tag)=> {return {score: tag.count, text: tag.value}});
            let totalResults = data.pageInfo.totalResults;

            dispatch({
                type: "TagStatisticsScore",
                payload: {score:31,text:"Очень хорооооооооший тег"},
            });

            //searchValueStats(tagQuery, totalResults);
        });

        $.getJSON('/api/trends?keyword=' + tag , function (data) {

            let trends = [];
            for (let i = 0; i < 5; i++) {
                if (data.length <= i)
                    break;
                trends.push({score: data[i].value, text: data[i].query});
            }
        });

        AutoService.searchYandexAuto(tag, (data)=>{
            dispatch({
                type: "ChangeYandexAuto",
                payload: data
            });
        });

        AutoService.searchGoogleAuto(tag,(data)=> {
            dispatch({
                type: "ChangeYoutubeAuto",
                payload: data
            });
        });

        AutoService.searchYoutubeAuto(tag,(data)=> {
            dispatch({
                type: "ChangeGoogleAuto",
                payload: data
            });
        });

    }
}