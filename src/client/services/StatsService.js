import {clientSettings} from "../config/clientConfig"
const StatsService = function(){

    const apiKey = clientSettings.googleApiKey;
    const youtubeSearchApiUrl = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey;
    const youtubeVideosApiUrl = "https://www.googleapis.com/youtube/v3/videos?key=" + apiKey;

    let tagsFromAllVideos = async (videoData) => {

        let tags = [];
        let allIds = videoData.items.map( (element) =>{ return element.id.videoId});

        //downloading all tags from all downloaded videos
        for (let i in allIds) {

            let fetchResponce = await fetch(youtubeVideosApiUrl + '&fields=items(snippet(title,description,tags))&part=snippet&id=' + allIds[i]);
            let data = await fetchResponce.json();

            for (let i in data.items[0].snippet.tags) {
                tags.push(data.items[0].snippet.tags[i]);
            }
        }
        return tags;
    };

    let notUniqueTags = (tags) =>{

        //constructing new list of tags and their count
        let tagWithCount = new Map();
        tags.forEach(a => tagWithCount.set(a, (tagWithCount.get(a) || 0) + 1));

        //disposing unique tags from array
        let uniqueKeys = tags.filter(a => tagWithCount.get(a) === 1);
        for (let i in uniqueKeys) {
            tagWithCount.delete(uniqueKeys[i]);
        }

        let newTags = [];
        tagWithCount.forEach((val, key) => newTags.push({ score: val, text: key }));
        return newTags;

    };

    let sortTags = (tags) =>{

        for (let i = 0; i < tags.length - 1; i++) {
            for (let j = 0; j < tags.length - 1; j++) {
                if (tags[j].score < tags[j + 1].score) {
                    let buf = { score: tags[j + 1].score, text: tags[j + 1].text };
                    tags[j + 1].score = tags[j].score;
                    tags[j + 1].text = tags[j].text;

                    tags[j].score = buf.score;
                    tags[j].text = buf.text;
                }
            }
        }

        return tags;
    };

    //downloading all videos with current tag
    let getPopularAndScore = async (text) => {

        try{
            let data = await fetch(youtubeSearchApiUrl + '&maxResults=10&relevanceLanguage=ru&regionCode=ru&q=' + text + '&part=snippet&type=video').then((resp) => resp.json());

            //total count of videos
            let totalResults = data.pageInfo.totalResults;

            let allTags = await tagsFromAllVideos(data);

            let sortedTags = sortTags(notUniqueTags(allTags));

            //get only top five of them
            let topFiveTags = sortedTags.slice(0,5);

            //returning popular tags and total number of videos
            return {topFiveTags: topFiveTags, totalResults: totalResults};
        }
        catch(err){
            throw new Error("Could not get stats");
        }
    };

    //getting tags score and returning it
    let getScore = async (text, totalVideos) => {
        try{
            let data = await fetch('/api/tagscore?keyword=' + text + "&count=" + totalVideos).then((resp) => resp.json());

            return {score: data.Points, text: data.Explanation, videoQuality: data.VideoCountQuality, searchValueQuality: data.SVQuality};
        }
        catch(err){
            throw new Error("Could not get score");
        }
    };

    return {
        getPopularAndScore: getPopularAndScore,
        getScore: getScore
    }
}();

export default StatsService;