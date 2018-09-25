import request from 'request'

const scoreController = function(){

    //getting statistics from adwords service using mutagen api
    let getScore = function (req, res) {
        let adWordsServiceUrl = 'https://adwordsservice.azurewebsites.net/Stat/ParseKey/?key=';

        request.get(encodeURI(adWordsServiceUrl + req.query.keyword + "&videoc=" + req.query.count)).pipe(res);
    };

    return{
        getScore: getScore
    }
}();

export default scoreController;
