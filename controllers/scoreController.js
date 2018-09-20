const request = require('request');

exports.getScore = function (req, res) {
    let adWordsServiceUrl = 'https://adwordsservice.azurewebsites.net/Stat/ParseKey/?key=';

    request.get(encodeURI(adWordsServiceUrl + req.query.keyword + "&videoc=" + req.query.count)).pipe(res);
};