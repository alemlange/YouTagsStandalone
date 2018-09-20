const request = require('request');

//getting statistics from adwords service using mutagen api
exports.getScore = function (req, res) {
    let adWordsServiceUrl = 'https://adwordsservice.azurewebsites.net/Stat/ParseKey/?key=';

    request.get(encodeURI(adWordsServiceUrl + req.query.keyword + "&videoc=" + req.query.count)).pipe(res);
};