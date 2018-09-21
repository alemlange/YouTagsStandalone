const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const youtagsDb = "youtagsDb";
const favoritesCollection = "favoritesCollection";

exports.saveFavorite = function (req, res) {

    let keyword = req.query.keyword;
    let userId = req.query.userId;

    mongoClient.connect(url, function(err, client){

        const db = client.db(youtagsDb);
        const collection = db.collection(favoritesCollection);
        let tag = {userId: userId, tag: keyword};
        collection.insertOne(tag, function(err, result){

            if(err){
                res.json({status:"NotOk"});
            }
            res.json({status:"Ok"});
        });
    });
};

exports.getFavorites = function (req, res) {

    let userId = req.query.userId;

    mongoClient.connect(url, function(err, client){

        const db = client.db(youtagsDb);
        const collection = db.collection(favoritesCollection);

        collection.find({userId: userId}).toArray(function(err, results){

            res.json(results);
        });
    });
};