import request from 'request'

const yandexUrl = "https://suggest.yandex.ru/suggest-ya.cgi?v=4&part=";
const youTubeUrl = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
const googleUrl = "https://suggestqueries.google.com/complete/search?client=firefox&q=";

const autosuggestController = function(){

    //returns array of suggested words based on input text from google, yandex and youtube
    let getAutosuggested = (req, res) => {

        let searchType = "";
        switch(req.query.type){
            case "yandex":{
                searchType = yandexUrl;
                break;
            }
            case "youtube":{
                searchType = youTubeUrl;
                break;
            }
            case "google":{
                searchType = googleUrl;
                break;
            }
            default:{
                searchType = yandexUrl;
            }
        }

        //piping to result
        request.get(encodeURI(searchType+req.query.keyword)).pipe(res);
    };

    return {
        getAutosuggested: getAutosuggested
    }
}();

export default autosuggestController;