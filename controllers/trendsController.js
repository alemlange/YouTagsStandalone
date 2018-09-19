const googleTrends = require('google-trends-api');

exports.getTrends = function (req, res) {

    let keyword = req.query.keyword;
    if (keyword !== undefined) {
        googleTrends.relatedQueries({ keyword: keyword })
            .then((resString) => {
                let words = JSON.parse(resString).default.rankedList[0].rankedKeyword;
                res.json(words);
            });
    }
    else {
        res.end("No keywords provided");
    }
};