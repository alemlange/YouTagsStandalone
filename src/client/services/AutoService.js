const AutoService = function(){

    let searchYandexAuto = async (text)=>{
        try{
            let data = await fetch('/api/autosuggest?type=yandex&keyword=' + text ).then((resp) => resp.json());

            return data[1];
        }
        catch(err){
            throw new Error("Could not get yandex suggested");
        }

    };

    let searchYoutubeAuto = async (text)=>{

        try{
            let data = await fetch('/api/autosuggest?type=youtube&keyword=' + text ).then((resp) => resp.json());

            return data[1];
        }
        catch(err){
            throw new Error("Could not get youtube suggested");
        }
    };

    let searchGoogleAuto = async (text) => {

        try{
            let data = await fetch('/api/autosuggest?type=google&keyword=' + text ).then((resp) => resp.json());

            return data[1];
        }
        catch(err){
            throw new Error("Could not get google suggested");
        }

    };

    return {
        searchYandexAuto: searchYandexAuto,
        searchGoogleAuto: searchGoogleAuto,
        searchYoutubeAuto: searchYoutubeAuto
    }

}();

export default AutoService;