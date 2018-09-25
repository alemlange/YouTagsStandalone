import express from "express"
import autosuggestController from "../controllers/autosuggestController"
import trendsController from "../controllers/trendsController"
import scoreController from "../controllers/scoreController"
import favoriteController from "../controllers/favoriteController"

let router = express.Router();

router.get('/trends',trendsController.getTrends);

router.get('/autosuggest', autosuggestController.getAutosuggested);

router.get('/tagscore', scoreController.getScore);

router.get('/savefavorite', favoriteController.saveFavorite);

router.get('/getfavorites', favoriteController.getFavorites);

export default router;