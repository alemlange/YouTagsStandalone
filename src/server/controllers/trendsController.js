import googleTrends from 'google-trends-api'
import * as logger from 'log4js';

const trendsController = function(){

    // getting trends using google trends api
    let getTrends = function (req, res) {

        try{
            let keyword = req.query.keyword;
            if (keyword !== undefined) {
                googleTrends.relatedQueries({ keyword: keyword })
                    .then((resString) => {
                        let words = JSON.parse(resString).default.rankedList[0].rankedKeyword;
                        res.json(words);

                    });
            }
            else {
                throw new Error("No keywords provided");
            }
        }
        catch(err){
            let lg4 = logger.getLogger();
            lg4.debug(err.message);
            lg4.level = 'debug';
            res.status(500).send('Error while getting trends');
        }

    };

    return{
        getTrends: getTrends
    }
}();

export default trendsController;
