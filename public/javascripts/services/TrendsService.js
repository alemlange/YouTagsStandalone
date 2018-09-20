import $ from "jquery";

var TrendsService = function(){

    var getTrends = (text, callback) => {
        $.getJSON('/api/trends?keyword=' + text , function (data) {

            let trends = [];
            for (let i = 0; i < 5; i++) {
                if (data.length <= i)
                    break;
                trends.push({score: data[i].value, text: data[i].query});
            }

            callback(trends);
        }).fail(()=>{
            throw new Error("Could not get trends");
        });
    };
    return {
        getTrends: getTrends,
    }
}();

export default TrendsService;