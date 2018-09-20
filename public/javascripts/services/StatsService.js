import $ from "jquery";

var StatsService = function(){

    var getPopularAndScore =(text, popularCallBack, scoreCallBack)=>{

        const apiKey ="AIzaSyD8875J05trC_O6hssu5gDTRaM1ImKZEKU";
        const youtubeSerchApiUrl = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey;
        const youtubeVideosApiUrl = "https://www.googleapis.com/youtube/v3/videos?key=" + apiKey;

        //downloading all videos with current tag
        $.getJSON(youtubeSerchApiUrl + '&maxResults=10&relevanceLanguage=ru&regionCode=ru&q=' + text + '&part=snippet&type=video', function (data) {

            let allTags = [];
            let allIds = [];
            for (let i in data.items) {
                allIds.push(data.items[i].id.videoId);
            }

            //downloading all tags from all downloaded videos
            for (let i in allIds) {
                $.ajax({
                    async: false,
                    url: youtubeVideosApiUrl + '&fields=items(snippet(title,description,tags))&part=snippet&id=' + allIds[i],
                    dataType: "json",
                    success: function (data) {
                        for (let i in data.items[0].snippet.tags) {
                            allTags.push(data.items[0].snippet.tags[i]);
                        }
                    }
                });
            }

            //constructing new list of tags and their count
            let map = new Map();
            allTags.forEach(a => map.set(a, (map.get(a) || 0) + 1));

            //disposing unique tags from array
            let uniqueKeys = allTags.filter(a => map.get(a) === 1);
            for (let i in uniqueKeys) {
                map.delete(uniqueKeys[i]);
            }

            let notUniqueTags = [];
            map.forEach((val, key) => notUniqueTags.push({ count: val, value: key }));

            //sorting tags
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

            //get only top five of them
            let topFiveTags = [];
            for (let i = 0; i < 5; i++) {
                if (notUniqueTags.length <= i)
                    break;
                topFiveTags.push(notUniqueTags[i]);
            }

            //forming top tags for inputted tag and their count
            let youPopular = topFiveTags.map((tag)=> {return {score: tag.count, text: tag.value}});

            //total count of videos
            let totalResults = data.pageInfo.totalResults;

            //returning popular tags 
            popularCallBack(youPopular);

            //getting tags score and returning it
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