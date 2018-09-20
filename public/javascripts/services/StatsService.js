import $ from "jquery";

var StatsService = function(){

    var getPopularAndScore =(text, popularCallBack, scoreCallBack)=>{
        $.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyD8875J05trC_O6hssu5gDTRaM1ImKZEKU&maxResults=10&relevanceLanguage=ru&regionCode=ru&q=' + text + '&part=snippet&type=video', function (data) {

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

            popularCallBack(youPopular);

            $.getJSON('/api/tagscore?keyword=' + text + "&count=" + totalResults, function (data) {
                scoreCallBack({score: data.Points, text: data.Explanation, videoQuality: data.VideoCountQuality, searchValueQuality: data.SVQuality});
            });
        });
    };
    return {
        getPopularAndScore: getPopularAndScore,
    }
}();

export default StatsService;