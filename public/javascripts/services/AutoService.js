import $ from "jquery";

var AutoService = function(){

    var searchYandexAuto =(text, callback)=>{
        $.getJSON('/api/autosuggest?type=yandex&keyword=' + text , function (data) {

            callback(data[1]);
        });
    };

    var searchYoutubeAuto =(text, callback)=>{
        $.getJSON('/api/autosuggest?type=youtube&keyword=' + text , function (data) {

            callback(data[1]);
        });
    };
    var searchGoogleAuto =(text, callback)=>{
        $.getJSON('/api/autosuggest?type=google&keyword=' + text , function (data) {

            callback(data[1]);
        });
    };

    return {
        searchYandexAuto: searchYandexAuto,
        searchGoogleAuto: searchGoogleAuto,
        searchYoutubeAuto: searchYoutubeAuto
    }

}();

export default AutoService;