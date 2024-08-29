const express = require('express');
const router = express.Router();
const { getCards, postCardData, getCardData } = require("../controllers/carddata");
const {cardDataValidator}=require("./cardDataValidator");


router.route('/cards').get(getCards);
router.route('/cards',cardDataValidator).post(postCardData);
router.route('/cards/:title').get(getCardData);



module.exports = router;