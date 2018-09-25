const TrendsService = function(){

    let getTrends = async (text) => {

        try{
            let data = await fetch('/api/trends?keyword=' + text).then((resp) => resp.json());

            let trends = [];
            for (let i = 0; i < 5; i++) {
                if (data.length <= i)
                    break;
                trends.push({score: data[i].value, text: data[i].query});
            }

            return trends;
        }
        catch(err){
            throw new Error(" Could not get trends");
        }
    };
    return {
        getTrends: getTrends,
    }
}();

export default TrendsService;