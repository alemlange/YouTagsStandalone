import mongodb from "mongodb"
import {serverConfig} from "../config/serverConfig"
import * as logger from 'log4js';

const favoriteController = function(){

    let mongoClient = mongodb.MongoClient;
    const favoritesCollection = "favoritesCollection";

    let saveFavorite = function (req, res) {

        try{
            let keyword = req.query.keyword;
            let userId = req.query.userId;

            mongoClient.connect(serverConfig.dbUrl, function(err, client){

                const db = client.db(serverConfig.dbName);
                const collection = db.collection(favoritesCollection);
                let tag = {userId: userId, tag: keyword};
                collection.insertOne(tag, function(err, result){

                    if(err){
                        throw new Error("Error while writing to db");
                    }
                    res.json({status:"Ok"});
                });
            });
        }
        catch(err){
            let lg4 = logger.getLogger();
            lg4.debug(err.message);
            lg4.level = 'debug';
            res.status(500).send('Error while saving favourite');
        }

    };

    let getFavorites = function (req, res) {

        try{
            let userId = req.query.userId;

            mongoClient.connect(url, function(err, client){

                const db = client.db(serverConfig.dbName);
                const collection = db.collection(favoritesCollection);

                collection.find({userId: userId}).toArray(function(err, results){

                    if(err){
                        throw new Error("Error while reading from db");
                    }

                    res.json(results);
                });
            });
        }
        catch(err){
            let lg4 = logger.getLogger();
            lg4.debug(err.message);
            lg4.level = 'debug';
            res.status(500).send('Error while getting favourites');
        }
    };

    return{
        saveFavorite: saveFavorite,
        getFavorites: getFavorites
    }
}();

export default favoriteController;